const connection = require('../Model/connection')
const util = require('util');


const handleDate = (date) =>{
    date = new Date(date);
  
    var currDate = new Date();
    var deltaTime = currDate-date;
    var hoursTime = deltaTime/(1000*60*60)
    if(hoursTime>24){
        hoursTime = hoursTime/24;
        hoursTime = parseInt(hoursTime) +  " Days ago";
    }
    else if(hoursTime<1){
      hoursTime = hoursTime*60;
      hoursTime = parseInt(hoursTime) + " minutes ago"
    }
    else {
        hoursTime = parseInt(hoursTime) + ' hours ago';
    }
    return hoursTime
  
  }

const queryAsync = util.promisify(connection.query).bind(connection);


async function DiscussIdController(req, res){
    const id_ = req.params.id;
    if(id_){
        try {
            // Execute both queries concurrently using Promise.all()
            const [result1, result2] = await Promise.all([
                queryAsync(`SELECT * FROM comments
                            LEFT JOIN discuss ON comments.discuss_id = discuss.id
                            WHERE comments.discuss_id = ${id_}
                            UNION
                            SELECT * FROM comments
                            RIGHT JOIN discuss ON comments.discuss_id = discuss.id
                            WHERE discuss.id IS NULL;`),
                queryAsync(`SELECT * FROM discuss WHERE id = ${id_};`)
            ]);
            result1.map((item)=> {
                // console.log("bc", item.commet_created_at)
                item.commet_created_at = handleDate(item.commet_created_at);
            })
            console.log(result1);
            // console.log("bc", result2)

        res.json([result1, result2]);
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to handle it elsewhere if needed
    }
    }
}
module.exports = DiscussIdController;
const connection = require("../Model/connection")

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
      // setTime(hoursTime)
  }
  return hoursTime

}

function DicsussController(req, res){
    sqlQuery = `select id, title, created_at, user_id from discuss;`
    connection.query(sqlQuery, (err, result) => {
        if (err) {
          console.error('Error inserting user:', err);
          return;
        }
        result.map((item)=>{
          item.created_at = handleDate(item.created_at);
        })
        // result.created_at = handleDate(result.created_at)
        console.log(result)
        res.json(result)
      });
}

module.exports = DicsussController;
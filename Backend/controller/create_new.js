const connection = require("../Model/connection");

function CreateNewController(req, res){
    newDiscussionContent = req.body;
    console.log(req.body)
    console.log(new Date())
    if(newDiscussionContent){
        sqlQuery = `INSERT INTO discuss (title, description, user_id) VALUES ("${newDiscussionContent.title}", "${newDiscussionContent.description}", "${newDiscussionContent.user_id}");`
        connection.query(sqlQuery, (err, result) =>{
            if(err){
                console.log("err", err);
            }
            console.log(result)
            res.json(result);
        })
    }
}

module.exports = CreateNewController;

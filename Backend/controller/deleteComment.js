const connection = require('../Model/connection');

function deleteCommentController(req, res){
    id = req.body.id;
    sqlQuery = `delete from comments where comment_id = ${id}`;
    connection.query(sqlQuery,(error, result)=>{
        if(error){
            res.json();
        }
        else{
            res.json(result)
        }
    })
}

module.exports = deleteCommentController;
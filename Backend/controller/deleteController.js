const connection = require('../Model/connection');

function deleteController(req, res){
    id = req.body.id
    sqlQuery = `delete from comments where discuss_id = ${id}`
    sqlQuery2 = `delete from discuss where id=${id}`;

    connection.query(sqlQuery, (error, result)=>{
        if(error){
            res.json({});
        }
        connection.query(sqlQuery2, (error, result2)=>{
            if(error){
                res.json({});
            }
            res.json({msg:"done"})

        })
    })
}

module.exports = deleteController;
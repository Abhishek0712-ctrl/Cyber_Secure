const connection = require("../Model/connection")
function ContactController(req, res){
  details = req.body;
  if(details){
      sqlQuery = `INSERT INTO contact (name, email, subject, contact_number, query_type, message) VALUES ("${details.name}", "${details.email}", "${details.subject}", "${details.phoneNo}", "${details.queryType}", "${details.message}");`
      connection.query(sqlQuery, (err, result) => {
          if (err) {
            console.error('Error inserting user:', err);
            return;
          }
          res.send("contact page")
        });
  }
    
}

module.exports = ContactController;
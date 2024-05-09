require('dotenv').config()
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')
const database = require("./Model/connection")

passport.use(
    new GoogleStrategy(
        {
            clientID:process.env.CLIENT_ID,
            clientSecret:process.env.CLIENT_SECRET,
            callbackURL:"/auth/google/callback",
            scope:["profile", "email"]
        },
        function (accessToken, refreshToken, profile,  callback){
            try{
                if(profile){
                    var id = profile.id;
                    var displayName = profile.displayName;
                    var email = profile.emails[0].value
                    sqlQuery = `INSERT IGNORE INTO user (id, username, email) VALUES ("${id}", "${displayName}", "${email}");`
                    new Promise((resolve, reject) => {
                    database.query(sqlQuery, function (error, result, fields) {
                        if (error) {
                            console.log("error here", error)
                        } else {
                            return resolve(result);
                        }
                    });
                    })
                }
                callback(null, profile);
            }
            catch(error){
                console.log("error found on this page", error)
            }
                
        }
    ),
);
passport.serializeUser((user, done)=>{
    console.log("user",user);
    done(null, user);
})
passport.deserializeUser((user, done)=>{
    console.log("desero",user);
    done(null, user)   

})

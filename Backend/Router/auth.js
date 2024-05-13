const router = require('express').Router()
const passport = require('passport');
const connection = require('../Model/connection')

router.get("/login/failed", (req, res)=>{
    res.status(401).json({
        error:true, 
        message:"Login failure"
    })
})


router.get("/login/success", (req, res)=>{
// console.log("nro", req.user);
    if(req.user){
        sqlQuery = `SELECT * FROM user where id = "${req.user.id}";`;
        connection.query(sqlQuery, (err, result)=>{
            res.status(200).json({
                error:false,
                message:"Successfully logged in",
                user:req.user,
                result:result
            });
        })
    }  
    else{
        res.status(403).json({
            error:true,
            message:"Not Authorized"
        })
    }
})

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: process.env.CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);
router.get("/logout", (req,res)=>{
    req.logout()
    res.clearCookie('session');
    res.redirect(process.env.CLIENT_URL)
//    res.send( { message: 'Successfully logged out' } );
    // res.redirect(process.env.CLIENT_URL)
})

module.exports = router

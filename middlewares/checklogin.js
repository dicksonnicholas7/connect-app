const { GetCompleteFreelancerProfile } = require('../controllers/Profile/GetPages');

module.exports.checkLoggedIn = function(req, res, next) {
    if(req.session.loggedIn){
        if(req.session.userAccount.verified===true){
            // if(req.session.user.first_name === '' || req.session.user.first_name === null ){
            //     if(req.session.userAccount.role_id === 1){
            //         next();
            //     }else{
            //         GetCompleteFreelancerProfile(req, res, next);
            //     }
            // }else{
                next();
            // }
        }else{
            if(req.session.userAccount.role_id===3){
                next();
            }else{
                res.render("auth/success-register",{page:'signup'});
            }
        }       
    } else{
        res.redirect("/login");
    } 
};
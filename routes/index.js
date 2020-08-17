const express = require('express');
let router = express.Router();
const {GetLogin, DoLogin, Logout} = require('../controllers/Auth/Login');
const { GetSignUp, DoSignUp,EmailVerify, ResendVerificationEmail } = require('../controllers/Auth/SignUp');
const {GetForgotPassword, GetResetPassword, GetResendPasswordLink, 
        forgotPasswordEmail, DoResetPassword,GetReset
        } = require('../controllers/Auth/ForgotPassword');
const { ApplyJob } = require('../controllers/Job/JobFreelancer');
const {GetVerify, DoVerification, SendVerificationAgain, NotVerified} = require('../controllers/Auth/Verify');
const {GetHowItWorks} = require('../controllers/Public');
const {GetComingSoonUpPage} = require('../controllers/ComingSoon');
const { GetFreelancers, GetSingleFreelancer} = require('../controllers/Freelancer/FreelancersPublic');
const {GetJobs} = require('../controllers/Job/JobPublic');
const {GetPublicFreelancers} = require('../controllers/Freelancer/FreelancersPublic')
const {GetPublicClients} = require('../controllers/Client/ClientPublic')
const {GetPublicJobs, GetIndex} = require('../controllers/Job/JobPublic')
const {GetSignupPage} = require('../controllers/temp');


const {GetSkills, GetJobCat} = require('../controllers/temp')

const {GetWelcome} = require('../controllers/Welcome')
//Public routes
// GET requests

router.get('/signup-page', GetSignupPage);

router.get('/welcome', GetWelcome);

router.get('/resend-password-link', GetResendPasswordLink);

router.get('/email-verify', EmailVerify);

router.get('/jobs', GetJobs);
router.get('/', GetComingSoonUpPage);

router.get('/find-freelancers', GetPublicFreelancers);
router.get('/find-clients', GetPublicClients);
router.get('/find-jobs', GetPublicJobs);


router.get('/freelancers', GetFreelancers);
router.get('/freelancer/:id', GetSingleFreelancer);

router.get('/how-it-works', GetHowItWorks);
router.get('/login', GetLogin);
router.get('/signup', GetSignUp);
router.get('/logout', Logout);
router.get('/forgot-password', GetForgotPassword);
router.get('/reset-password/:token/:email', GetResetPassword);
router.get('/reset', GetReset);
router.get('/verify', GetVerify);
router.get('/send-verification', SendVerificationAgain);
router.get('/verification/:email/:token', DoVerification);
router.get('/coming-soon', GetComingSoonUpPage);



router.get('/skills', GetSkills);
router.get('/job-category', GetJobCat);



router.post('/resend-verification', ResendVerificationEmail);


router.get('/job-apply/:id', ApplyJob);



//POST requests
router.post('/signup', DoSignUp);
router.post('/login', DoLogin);
router.post('/forgot-password', forgotPasswordEmail);
router.post('/reset-password', DoResetPassword);



module.exports = router;

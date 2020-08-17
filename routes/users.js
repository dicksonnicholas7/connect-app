const express = require('express');
let router = express.Router();

const {
    GetClientProfile, GetFreelancerProfile, GetCompleteFreelancerProfile, 
    GetCompleteFreelancerPortfolio, GetCompleteFreelancerSkills, GetClientView, GetViewFreelancer,
    GetCompleteFreelancerEducation, GetAllEducations, GetClientProfileView, GetFreelancerProfileView, 
} = require('../controllers/Profile/GetPages');

const {UpdateProfile, UpdateFreelancerProfile, UpdateClientProfile,UploadProfilePicture } = require('../controllers/Profile/Profile');
const { DoPostJob,GetPostJob, GetAllFreelancers } = require('../controllers/Job/PostJob');
const { GetDashboardSwitch } = require('../controllers/Dashboard/DashboardSwitch');
const {NotVerified} = require('../controllers/Auth/Verify');
const {GetDashboardClient, GetClientDashboardStats} = require('../controllers/Dashboard/DashboardClient');
const {GetDashboardFreelancer, GetJobCount} = require('../controllers/Dashboard/DashboardFreelancer');
const { GetDashboardAdmin } = require('../controllers/Dashboard/DashboardAdmin');
const { AddPortfolio, UpdatePortfolio, DeletePortfolio} = require('../controllers/Profile/Portfolio');
const { AddSkills, UpdateSkill, DeleteSkill } = require('../controllers/Profile/Skills');
const { UpdateCertification, AddCertification, UpdateCertificationAgain, DeleteCertification, GetSingleCertDetails } = require('../controllers/Profile/Certification');
const { AddExperience, UpdateExperience, UpdateExperienceAgain, DeleteExperience, GetSingleExpDetails} = require('../controllers/Profile/Experience');
const { GetJobCat, PostSkills, PostJobCategory } = require('../controllers/temp');
const {GetAllJobsFreelancer} = require('../controllers/Job/JobFreelancer');
const {GetJobById, ApplyJob,AcceptJob, DeleteJobApplication, RejectJob, GetSingleJobDetail } = require('../controllers/Job/JobFreelancer');
const {GetSingleJob} = require('../controllers/Job/UpdateJob');
const {AwardJob} = require('../controllers/Job/ViewJobClient');
const {GetJobWorkSpace, UploadFile} = require('../controllers/Job/JobWorkSpace');
const {AddEducation, DeleteEducation, UpdateEducation, 
    GetUserEducationList, GetSingleEduDetails,
    UpdateEducationAgain } = require('../controllers/Profile/Education');


router.get('/freelancer-profile-view', GetViewFreelancer);
router.get('/client-profile-view', GetClientProfileView);
router.get('/freelancer-profile-view', GetFreelancerProfileView);
router.get('/client', GetClientView);


//GET requests for Profile
router.get('/complete-freelancer-profile', GetCompleteFreelancerProfile);
router.get('/complete-freelancer-portfolio', GetCompleteFreelancerPortfolio);
router.get('/complete-freelancer-skills', GetCompleteFreelancerSkills);
router.get('/complete-freelancer-education', GetCompleteFreelancerEducation);
router.get('/education',GetAllEducations )
router.get('/client-profile', GetClientProfile);
router.get('/freelancer-profile', GetFreelancerProfile);
router.get('/edu/:id', GetUserEducationList);







//POST requests to add profile
router.post('/add-portfolio', AddPortfolio);
router.post('/add-skill', AddSkills);
router.post('/add-experience', AddExperience);
router.post('/add-education', AddEducation)
router.post('/add-certification', AddCertification);



//POST requests to update profile
router.post('/upload-profile-picture', UploadProfilePicture)
router.post('/update-profile', UpdateProfile); 
router.post('/update-client-profile', UpdateClientProfile);
router.post('/profile-update', UpdateFreelancerProfile);
router.post('/update-education', UpdateEducation);
router.post('/update-education-old', UpdateEducationAgain);
router.post('/update-certification-old', UpdateCertificationAgain);
router.post('/update-experience-old', UpdateExperienceAgain);
router.post('/update-skill', UpdateSkill);
router.post('/update-experience', UpdateExperience);
router.post('/update-portfolio', UpdatePortfolio);
router.post('/update-certification', UpdateCertification);



//POST requests to delete profile
router.get('/delete-education/:id', DeleteEducation);
router.get('/delete-skill/:id', DeleteSkill);
router.get('/delete-portfolio/:id', DeletePortfolio);
router.get('/delete-experience/:id', DeleteExperience);
router.get('/delete-certification/:id', DeleteCertification);



router.get('/get-single-cert/:id', GetSingleCertDetails);
router.get('/get-single-edu/:id', GetSingleEduDetails);
router.get('/get-single-exp/:id', GetSingleExpDetails);

  
router.get('/client-stats', GetClientDashboardStats);
router.get('/jobcount', GetJobCount);



router.get('/job-workspace/:id', GetJobWorkSpace);


router.get('/all-freelancers', GetAllFreelancers);


router.get('/award-job/:id', AwardJob);
router.get('/accept-job/:id', AcceptJob);
router.post('/reject-job', RejectJob);





router.get('/view-single-job/:id', GetSingleJobDetail);
router.get('/job-view/:id', GetSingleJob);


router.get('/jobcategory', GetJobCat);




router.post('/jobcategory', PostJobCategory);
router.post('/skills', PostSkills);




/* GET users listing. */
router.get('/', GetDashboardSwitch);
router.get('/notverified', NotVerified);



//get dashboards


router.get('/dashboard-client', GetDashboardClient);
router.get('/dashboard-freelancer', GetDashboardFreelancer);
router.get('/dashboard-admin', GetDashboardAdmin);







  

//post job
router.get('/post-job', GetPostJob);

router.get('/jobs', GetAllJobsFreelancer);
router.get('/job/:id', GetJobById);





router.post('/post-job', DoPostJob)






router.post('/apply-job', ApplyJob);
router.post('/delete-job-application', DeleteJobApplication);



router.post('/upload-job-file', UploadFile);







module.exports = router;

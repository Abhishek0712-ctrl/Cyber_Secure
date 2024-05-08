const router = require('express').Router();
const DiscussIdController = require('../controller/DiscussId');
const CreateCommentController = require('../controller/PostComments');
const ContactController = require("../controller/contactController");
const CreateNewController = require('../controller/create_new');
const DicsussController = require("../controller/discussController");
const ResearchPaperController = require('../controller/ResearchPaperController');
const deleteController = require('../controller/deleteController')
const deleteCommentController = require('../controller/deleteComment')

router.post('/contact', ContactController);
router.get("/discuss", DicsussController);
router.post("/create-new",CreateNewController);
router.post("/create-comment", CreateCommentController);
router.get("/discuss-id/:id", DiscussIdController);
router.get('/research', ResearchPaperController);
router.post('/delete-disscuss', deleteController);
router.post("/delete-comment", deleteCommentController);
module.exports = router
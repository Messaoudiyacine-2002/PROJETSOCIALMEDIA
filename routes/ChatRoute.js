const express = require("express");
const ChatController = require("../controllers/ChatController.js");

const router = express.Router();

module.exports =()=>{
router.post('/', ChatController.createChat);
router.get('/:userId', ChatController.userChats);
router.get('/find/:firstId/:secondId', ChatController.findChat);

return router;
}
const express = require("express");
const MessageController= require("../controllers/MessageController.js");

const router = express.Router();
module.exports =()=>{
router.post('/',  MessageController.addMessage);

router.get('/:chatId',  MessageController.getMessages);

return router;
}
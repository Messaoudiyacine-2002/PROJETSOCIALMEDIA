const express = require("express");
const AuthController = require("../Controllers/AuthController.js")


const router = express.Router()


module.exports =() =>{
router.post('/register', AuthController.registerUser);
router.post('/login', AuthController.loginUser);

return router;
}
const express = require("express");
const UserController = require("../Controllers/UserController.js");

const authMiddleWare = require("../middleware/AuthMiddleware.js");

const router = express.Router();

module.exports =()=>{
router.get('/:id', UserController.getUser);
router.get('/', UserController.getAllUsers);
router.put('/:id',authMiddleWare, UserController.updateUser);
router.delete('/:id',authMiddleWare, UserController.deleteUser);
router.put('/:id/follow',authMiddleWare, UserController.followUser);
router.put('/:id/unfollow',authMiddleWare, UserController.unfollowUser);
return router;
}
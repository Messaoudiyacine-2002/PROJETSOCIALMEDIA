const express = require("express");
const PostController = require("../Controllers/PostController.js");
 
const authMiddleWare = require("../middleware/AuthMiddleware.js");


const router = express.Router()

module.exports =() =>{
router.post('/', PostController.createPost);
router.get('/:id', PostController.getPost);
router.put('/:id', PostController.updatePost);
router.delete("/:id", PostController.deletePost);
router.put("/:id/like", PostController.likePost);
router.get("/:id/timeline", PostController.getTimelinePosts);

return router;
}
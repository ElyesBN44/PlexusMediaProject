const express = require('express')
const {updatePost,GetPost,addPost}=require('../controllers/postControllers')
const postRouter=express.Router()


//add post
postRouter.post('/adminpost',addPost)
//get all posts
postRouter.get('/admin_allposts',GetPost)
//updateposts
postRouter.put('/updatepost/:id',updatePost)

module.exports = postRouter
const postSchema = require('../model/posts');

exports.addPost=async(req,res)=>{
    try{
 const NewPost= new postSchema(req.body)
 await NewPost.save()
res.status(200).send({NewPost,msg:"Post added "})
    }catch(err){
        res.status(500).send('could not add the post')
    }
}

exports.updatePost = async(req,res)=>{
    const {id}= req.params
    try{
        const updatePost = await postSchema.findByIdAndUpdate(id,{$set:{...req.body}})
res.status(200).send('the post is updated ')
    }catch(err){
        res.status(500).send('NOT UPDATED')
    }
}
exports.GetPost=async(req,res)=>{
    try{
    const Posts = await postSchema.find()
    res.status(200).send({Posts,msg:'list of posts'})
    }catch(err){
      console.log(err)
    res.status(500).send('could not get posts')
    }
    }
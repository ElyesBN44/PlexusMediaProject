
const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    
    title:{type:String,required:true},
    description:{type:String,required:true},
    image1:{type:String,required:true},
    partenaires:{type:String,required:true} 
})
module.exports = mongoose.model('postSchema',postSchema)
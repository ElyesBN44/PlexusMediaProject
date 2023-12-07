
const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    
    title:{type:String,required:true},
    description:{type:String,required:true},
    image1:{type:String,required:true},
    partenaires:{type:String,required:true} ,
    description2:{type:String},
    image2:{type:String},
    description3:{type:String},
    image3:{type:String},
})
module.exports = mongoose.model('postSchema',postSchema)
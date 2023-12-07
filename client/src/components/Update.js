import axios from 'axios';
import React,{useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate,useParams } from 'react-router';
import {updatePost,GetUniquePost} from '../api/contact'
const Update = () => {


  const {id}=useParams()
  let navigate = useNavigate();
  const [title,setTitle]=useState('')
const [description,setDescription]=useState('')
const [image1,setImage1]=useState('')
const [description2,setDescription2]=useState('')
const [image2,setImage2]=useState('')
const [description3,setDescription3]=useState('')
const [image3,setImage3]=useState('')
const [partenaires,setPartenaires]=useState('')




const getPostbyId=async(postId)=>{
const data = await GetUniquePost(postId)
console.log('datagetunique',data)
setDescription(data.getposts.description)
setTitle(data.getposts.title)
setImage1(data.getposts.image1)
setImage2(data.getposts.image2)
setImage3(data.getposts.image3)
setPartenaires(data.getposts.partenaires)
setDescription2(data.getposts.description2)
setDescription3(data.getposts.description3)
}



useEffect(()=>{
  if(id){ getPostbyId(id)}
 
},[id])



  const handleSubmit=async(postId,newValue)=>{
   await updatePost(postId,newValue)


 navigate('/posts')

  }

  return (
    <div>
     
   <div >
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e)=>setName(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="Description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}

        />
      </label>
      <label>
        Partenaires:
        <input
          type="image"
          name="partenaires"
          value={partenaires}
          onChange={(e)=>setPartenaires(e.target.value)}
        />
      </label>
      <label>
        Description2:
        <input
          type="text"
          name="Description2"
          value={description2}
          onChange={(e)=>setDescription2(e.target.value)}

        />
      </label>
      <label>
        Description3:
        <input
          type="text"
          name="Description3"
          value={description3}
          onChange={(e)=>setDescription3(e.target.value)}

        />
      </label>
      <label>
        image1:
        <input
          type="image"
          name="image1"
          value={image1}
          onChange={(e)=>setImage1(e.target.value)}

        />
      </label>
      <label>
        Image2:
        <input
          type="image"
          name="image2"
          value={image2}
          onChange={(e)=>setImage2(e.target.value)}

        />
      </label>
      <label>
        image3:
        <input
          type="image"
          name="image3"
          value={image3}
          onChange={(e)=>setImage3(e.target.value)}

        />
      </label>
      <button onClick={()=>handleSubmit(id,{Post})} >update post</button>
   
    </div>

  </div>
  )
}

export default Update
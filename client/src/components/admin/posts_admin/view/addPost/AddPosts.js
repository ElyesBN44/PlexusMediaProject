import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { addPost } from '../../../../../api/api_Admin/api_admin';
import "./add.css"
const AddPosts = () => {
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [image1,setImage1]=useState('')
    const [partenaires,setPartenaires]=useState("")
    let navigate = useNavigate();

    const handleSubmit=async(value)=>{
        await addPost(value)
         navigate('/admin/posts')
        
          }
  return (
    <div className='bodyupdate'>
      <form className="login-form" >
  <h1>adding posts</h1>
  <div className="form-input-material">
    <input
      type="text"
  
      
     
      className="form-control-material"
      required=""
      value={title} 
      onChange={(e)=>setTitle(e.target.value)}
    />
    <label htmlFor="username">Title</label>
  </div>
  <div className="form-input-material">
    <input
      type="text"
     
   
     
      className="form-control-material"
      required=""
      value={description} 
      onChange={(e)=>setDescription(e.target.value)}
    />
    <label htmlFor="description">description</label>
  </div>
  <div className="form-input-material">
    <input
      type="text"
    
     
      className="form-control-material"
      required=""
      value={image1} 
      onChange={(e)=>setImage1(e.target.value)}
    />
    <label htmlFor="image1">image1</label>
  </div>
  <div className="form-input-material">
    <input
      type="text"
   
      className="form-control-material"
      required=""
      value={partenaires} 
      onChange={(e)=>setPartenaires(e.target.value)}
    />
    <label htmlFor="partenaires">partenaires</label>
  </div>
  <button type="button" className="btn btn-primary btn-ghost" onClick={()=>handleSubmit({title,description,image1,partenaires})}  >
    ajout
  </button>
</form>

    </div>
  )
}

export default AddPosts

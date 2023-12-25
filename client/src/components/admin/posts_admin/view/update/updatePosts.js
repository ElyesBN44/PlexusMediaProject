import React,{useEffect, useState} from 'react'
import "./updatePosts.css"
import { useNavigate,useParams } from 'react-router';
import { UpdatePost } from '../../../../../api/api_Admin/api_admin';



const UpdatePosts = () => {
  const [title,setTitle]=useState('')
const [description,setDescription]=useState('')
const [image1,setImage1]=useState('')
const [partenaires,setPartenaires]=useState(0)
const navigate = useNavigate()
const {id}=useParams()
const handeUpdat=async(idcon,values)=>{
await UpdatePost(idcon,values)
}


const getUniquePost=async(postid)=>{
const data = await getUniquePost(postid)
console.log("data unique",data.getuniquepost
)
setTitle(data.getuniquepost.title)
setDescription(data.getuniquepost.description)
setImage1(data.getuniquepost.image1)
setPartenaires(data.getuniquepost.partenaires)


}
useEffect(()=>{
if(id){getUniquePost(id)}
},[id])
  return (
    <div className='bodyupdate'>
    <form className="login-form" action="javascript:void(0);">
<h1>adding posts</h1>
<div className="form-input-material">
  <input
    type="text"
    name="title"
    id="title"
    placeholder=""
    autoComplete="off"
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
    name="description"
    id="description"
    placeholder=" "
    autoComplete="off"
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
    name="image1"
    id="image1"
    placeholder=" "
    autoComplete="off"
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
    name="partenaires"
    id="partenaires"
    placeholder=""
    autoComplete="off"
    className="form-control-material"
    required=""
    value={partenaires} 
    onChange={(e)=>setPartenaires(e.target.value)}
  />
  <label htmlFor="partenaires">partenaires</label>
</div>
<button onClick={()=>navigate('/admin/updatepost')} className="btn btn-primary btn-ghost">
  Update
</button>
</form>

  </div>
  )
}

export default UpdatePosts

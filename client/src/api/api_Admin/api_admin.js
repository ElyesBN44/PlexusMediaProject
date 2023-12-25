import axios from 'axios'

//for the contacts
 export const fetchContacts =async()=>{
    const {data} = await axios.get(`http://localhost:5002/auth/admin_allusers`);
    return data 
}


//for the posts(publications)
export const addPost =async(value)=>{
    const{data}= await axios.post(`http://localhost:5002/admin/adminpost`,{...value});
    return data
}


export const getPost =async()=>{
    const {data} = await axios.get(`http://localhost:5002/admin/admin_allposts`);
    return data
}


export const UpdatePost = async(id,value)=>{
    const updatedContact = await axios.put(`http://localhost:5002/admin/posts`,value);
    return updatedContact
    
}
export const deletePost = async(id)=>{
    const deletePost = await axios.delete(`http://localhost:5002/admin/posts/${id}`);
    
}



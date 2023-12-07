import axios from 'axios'


 export const fetchContacts =async()=>{
    const {data} = await axios.get(`http://localhost:5002/auth/admin_allusers`);
    return data 
}
export const addPost =async()=>{
    const{data}= await axios.get(`http://localhost:5002/admin/adminpost`);
    return data
}

export const UpdatePost = async(id,value)=>{
    const updatedContact = await axios.put(`http://localhost:5002/admin/posts`,value);
    return updatedContact
    
}


import React, { useEffect, useState } from 'react'
import ViewCardUsers_Admin from './ViewCardUsers_Admin'
import { fetchContacts } from '../../../../api/api_Admin/api_admin'

const ViewUsers_Admin = () => {

  const [viewList,setViewList]=useState()

  const getallusers=async()=>{
    try{
      await console.log('dkhellna')
      const data = await fetchContacts()
      await console.log('data.Contacts',data.Contacts)
      setViewList(data.Contacts)
    }catch(err){
      console.log(err)
    }
  }

useEffect(()=>{
getallusers()
},[])
// console.log('use',viewList)
console.log((viewList[0]))
  return (
    
    <div>

    {
        typeof(viewList)==="object"   ? (alert('hey wait ')) :viewList.map((el)=><ViewCardUsers_Admin  el={el}   />)
        
      }  
      
    </div>
  )
}

export default ViewUsers_Admin


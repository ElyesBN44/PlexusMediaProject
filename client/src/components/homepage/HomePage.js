import React,{useEffect} from 'react'
import {fetchaccount} from '../../api/authapi'
import {useDispatch,useSelector} from 'react-redux'
import {setAccount} from '../../store/accountSlice'
import { useNavigate } from 'react-router';
import Admin from '../admin/Admin';
import User from '../user/User';
import Login from '../login/Login'

const HomePage = () => {

  const auth = useSelector(state=>state.account)
  console.log('b3ed el login user =>', auth)

const dispatch = useDispatch()
const navigate = useNavigate()
const getAcount=async()=>{
  const data = await fetchaccount()
  console.log('data login', data)
  dispatch(setAccount(data))
}

useEffect(()=>{
getAcount()
},[])

const logout=()=>{
  localStorage.removeItem('token')
  navigate('/login')
}

const token = localStorage.getItem('token')

  return (
    <div>

      {
token ? (<>
{
  auth.role === "admin" ?  <Admin  auth={auth} logout={logout}   /> : <User   auth={auth} logout={logout}    /> 

}</>):(<Login/>)
      }
    </div>
  )
}

export default HomePage
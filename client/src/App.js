import { Routes, Route } from 'react-router-dom'
import Register from './components/register/Register'
import Login from './components/login/Login'
import './App.css'
import HomePage from './components/homepage/HomePage'
import ViewUsers_Admin from './components/admin/users_admin/view/ViewUsers_Admin'
import Admin from './components/admin/Admin'
import { ViewPost } from './components/admin/posts_admin/view/viewPosts'
import UpdatePosts from './components/admin/posts_admin/view/update/updatePosts'
import AddPosts from './components/admin/posts_admin/view/addPost/AddPosts'


function App() {
  return (
    <div className='App' >
      
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="/admin/ViewUsers" element={<ViewUsers_Admin />} />
        <Route path="/admin/posts" element={<ViewPost />} />
        <Route path="/admin/addposts" element={<AddPosts />} />

        <Route path="/admin/updatepost/:id" element={<UpdatePosts />} />
      </Routes>
    </div>
  );
}

export default App;

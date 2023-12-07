import {Routes,Route} from 'react-router-dom'
import Register from './components/register/Register'
import Login from './components/login/Login'
import './App.css'
import HomePage from './components/homepage/HomePage'
import ViewUsers_Admin from './components/admin/users_admin/view/ViewUsers_Admin'
import Admin from './components/admin/Admin'

function App() {
  return (
    <div className='App' >
{/* <Navbar/> */}
      <Routes>
        <Route  path='/' element={<Register/>}   />
        <Route path='/login' element={<Login/>}/>
<Route path="/home" element={<HomePage/>}/>
<Route path="/admin" element={<Admin/>}/>

<Route path="/admin/ViewUsers" element={<ViewUsers_Admin/>}/>

      </Routes>
    </div>
  );
}

export default App;

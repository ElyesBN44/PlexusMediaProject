import React from 'react'
import './admin.css'

const Admin = ({auth,logout}) => {
  return (
    <div className='bodyA'>
   <>
  <header>
    <hgroup>
      <h1>PlexusMedia Admin Dashboard</h1>
      <a href="/FrontPage">← visit website</a>
    </hgroup>
  </header>
  <nav>
    <ul>
      <li>
        <a className="brick dashboard" href="/admin/posts">
          <span className="icon ion-home" />
          Posts
        
        </a>
      </li>
      <li>
        <a className="brick pages" href="#">
          <span className="icon ion-document" />
          Agenda
        </a>
      </li>
      <li>
        <a className="brick users" href="/admin/ViewUsers">
          <span className="icon ion-person" />
          Utilisateurs
        </a>
      </li>
      
    </ul>
  </nav>
  <div id="content" className="pages">
    <header>
      <div className="brick identify">
        <span className="icon ion-document" />
      </div>
      <div className="brick title">
        <h2>Home Page</h2>
      </div>
      <div className="brick close">
        <span className="text">Delete</span>
        <span className="icon ion-close" />
      </div>
      <div className="brick save">
        <span className="text">Save</span>
        <span className="icon ion-checkmark" />
      </div>
    </header>





  </div>
  <footer></footer>
</>
</div>
  )
}

export default Admin

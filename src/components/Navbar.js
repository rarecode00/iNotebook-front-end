import React from 'react'
import {Link , useLocation, useNavigate} from "react-router-dom"
import "../NoteItemCss.css"


function Navbar(props) {
  let location = useLocation();
  const navigate = useNavigate("");

  const handleClick = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('Name');
    navigate('/login');
    props.showAlert("See you soon again", "success");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">iNotebook</Link>
      <button className= "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className= {`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to="/about">About</Link>
          </li>
        </ul>
        {!localStorage.getItem('token') ? <form className="d-flex" role="search">
         <Link className={`${location.pathname === '/login' ? "d-none" : ""} add-button btn btn-primary mx-2`} to = "/login" role="button">Login</Link>
         <Link  className= {`${location.pathname === '/signup' ? "d-none" : ""} add-button btn btn-primary mx-2`} to = "/signup" role="button">Sign Up</Link>
        </form>:
         <div className="container d-flex justify-content-end">
         <div className={`${location.pathname === '/' ? "" : "d-none"} dropdown`}>
            <button className="btn btn-secondary dropdown-toggle mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Profile
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item">{localStorage.getItem('Name')}</Link></li>
            </ul>
        </div>
         <button onClick={handleClick} className={`${location.pathname === '/' ? "" : "d-none"} add-button btn btn-primary`}>Log Out</button>
         {/* <Link  className= {`${location.pathname === '/signup' ? "d-none" : ""} add-button btn btn-primary mx-2`} to = "/signup" role="button">Sign Up</Link> */}
         </div>
        }
      </div>
    </div>
  </nav>
  )
}

export default Navbar
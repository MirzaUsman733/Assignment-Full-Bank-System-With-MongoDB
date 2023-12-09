import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Header() {

  const navigate = useNavigate()
  const handleLogout = () => {
    axios
      .post("http://localhost:8000/auth/logout")
      .then((res) => {
        console.log("res.data : ", res.data);
        console.log("User Successfuly Logged out!");
        navigate('/')
        console.log("Token Payload : ", jwtDecode(res.data.token));
      })
      .catch((error) => {
        console.log("Error In Logout Function : ", error.message);
      });
  };
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#0077b6"}}>
        <div className="container">
          <Link to='/' className="navbar-brand">BANK-APP </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <Link to='/auth/login' className='btn btn-light border-1'>login</Link>
          </div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>

    </>
  )
}

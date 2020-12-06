import React, { useState } from 'react'

function Navbar() {

  const [userId, setUserId] = useState(localStorage.getItem("user_id"));


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <i class="fas fa-dragon"></i>
      <a className="navbar-brand" href="/">Stack OverFlow</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href={userId !== "null"? "/add":"/login"}>Add Question</a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href={userId !== "null" ? "/profile" : "/signup"}> {userId !== "null" ? "Profile" : "Signup"} </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href={userId !== "null" ? "/logout" : "/login"}>{userId !== "null" ? "Logout" : "Login"}</a>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
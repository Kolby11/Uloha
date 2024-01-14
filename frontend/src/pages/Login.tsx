import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
     <h1>
      Login
     </h1>
      <form action='http://localhost:3000/login' method='POST'>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text"></input>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password"></input>
        <input type="submit"></input>
      </form>
      <div>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
      </div>
  </>
  )
}

export default Login
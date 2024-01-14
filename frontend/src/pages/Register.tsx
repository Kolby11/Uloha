import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
    <h1>
      Register
     </h1>
      <form action='http://localhost:3000/register' method='POST'>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text"></input>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password"></input>
        <input type="submit"></input>
      </form>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    </>
  )
}

export default Register
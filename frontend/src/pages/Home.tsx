import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div>Hovno</div>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </>
  )
}

export default Home
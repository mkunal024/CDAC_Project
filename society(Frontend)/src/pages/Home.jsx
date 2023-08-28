import React from 'react'
import Login from './Login'
import "../Styles/home.css"
import img from "../images/society.jpg"
const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-img'>
        <img src={img} />
      </div>
      <div className='login-form'>
        <Login/>
      </div>

    </div>
  )
}

export default Home

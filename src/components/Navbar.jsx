import React from 'react'
import Details from './Details.jsx'
import UserName from './UserName.jsx'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='d-flex justify-content-around align-items-center c_height w-100'>
        <UserName />
        <Details />
    </div>
  )
}

export default Navbar
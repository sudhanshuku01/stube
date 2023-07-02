import React, { useState } from 'react'
import  '../css/Navbar.css'
import logo from './video.png'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
const Navbar = ({setSearch}) => {
  const Navigate=useNavigate();
  const [value,setValue]=useState('')
  const handlesubmit=(e)=>{
  e.preventDefault()
   setSearch(value)
   Navigate(`/search/${value}`,{replace:true})
   setValue('')
  }
  return (
    <div className='navbar'>
      <div style={{display:'flex',alignItems:'center'}}>
      <img onClick={()=>Navigate('/')} style={{cursor:'pointer'}} src={logo} alt="" />
      <div onClick={()=>Navigate('/')} id='appname'>STube</div> 
      </div>
       <form id='searchform' >
        <input onChange={(e)=>setValue(e.target.value)} placeholder='search...' type="text" value={value} />
        <label onClick={handlesubmit} style={{cursor:'pointer'}}><i className="fa-solid fa-magnifying-glass"></i></label>
       </form>
    </div>
  )
}

export default Navbar

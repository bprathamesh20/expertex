import React from 'react'
import logo from '../assets/logo.png'
import { BsBoxArrowRight} from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export default function Navbar(props) {
  const isLoggedIn = props.isLoggedIn
  const navigate = useNavigate()
  if(isLoggedIn){
    return (
      <div className='h-5 flex flex-row mt-5 justify-between items-center '>
          <div>
          <img src={logo} alt="logo" className='h-20 ml-5'/>
          </div>
          <div className='mr-5'>
          <button onClick={() => navigate("/")} ><BsBoxArrowRight/></button>
          </div>
      </div>
    )

  }
  return (
    <div className='h-5 flex flex-row mt-5 justify-between items-center '>
        <div>
        <img src={logo} alt="logo" className='h-20 ml-5'/>
        </div>
    
    </div>
  )
  
}

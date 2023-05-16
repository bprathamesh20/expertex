import React from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import ProfilePopUp from './common/profilePopUp'

export default function Navbar(props) {
  const isLoggedIn = props.isLoggedIn;
  const navigate = useNavigate();

  if (isLoggedIn) {
    return (
      <div className='h-5 flex flex-row pt-8 pb-8 justify-between items-center  bg-slate-800'>
        <div >
          <img src={logo} alt='logo' className='h-20 ml-5' />
          
        </div>
        <ProfilePopUp />
      </div>
    );
  }

  return (
    <div className='h-10 flex flex-row pt-6 pb-6 justify-between items-center bg-slate-800'>
      <div>
        <img src={logo} alt='logo' className='h-20 ml-5' />
      </div>
    </div>
  );
}

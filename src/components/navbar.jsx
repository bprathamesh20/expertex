import React from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import ProfilePopUp from './common/profilePopUp'

export default function Navbar(props) {
  const isLoggedIn = props.isLoggedIn;
  const navigate = useNavigate();

  if (isLoggedIn) {
    return (
      <div className='h-5 flex flex-row mt-8 justify-between items-center p-2'>
        <div >
          <img src={logo} alt='logo' className='h-20 ml-5' />
          
        </div>
        <ProfilePopUp />
      </div>
    );
  }

  return (
    <div className='h-5 flex flex-row mt-5 justify-between items-center'>
      <div>
        <img src={logo} alt='logo' className='h-20 ml-5' />
      </div>
    </div>
  );
}

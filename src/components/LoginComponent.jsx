
import React, { useState } from 'react';
import { LoginApi } from '../api/authApi'

import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


export default function LoginComponent() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    let navigate = useNavigate()
    const login = async(event) =>{
        event.preventDefault();
        try {
          let res = await LoginApi(credentials.email, credentials.password)
        console.log(res)
        toast.success('Successfully Loged In !')
        } catch (error) {
          toast.error('Incorrect Login credentials !')
        }
    }

    const googleSignIn = async(event) =>{
      event.preventDefault();
      let response = await GoogleSignInApi();
      console.log(response)
    }
  return (
    <div className='flex flex-col items-center mt-7'>
        <h1 className='text-3xl'>Login </h1>

        <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="input input-bordered w-full max-w-xs mt-5"
            placeholder="Email "
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="input input-bordered w-full max-w-xs mt-5"
            placeholder="Password"
          />
          <div className='flex flex-row'>
         <button className='btn btn-primary mt-5 mr-5' onClick={login}>Login</button> 

         <button className='btn mt-5 ml-5'onClick={() => navigate("/register")} >Register</button>   
         </div>
         <div className='mt-5'>
        
         </div>
    </div>
  )
}

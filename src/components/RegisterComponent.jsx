
import React, { useState } from 'react';
import { RegisterApi } from '../api/authApi'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


export default function RegisterComponent() {
    const [credentials, setCredentials] = useState({ email: '', password: '', name: ''});
    let navigate = useNavigate()
    const register = async(event) =>{
        event.preventDefault();
        try {
          let res = await RegisterApi(credentials.email, credentials.password)
        console.log(res)
        toast.success('Account Created Successfully !')

        } catch (error) {
          toast.error('There was an error !')
        }
    }


  return (
    <div className='flex flex-col items-center justify-center h-screen mt-7'>
        <h1 className='text-3xl'>Create a new account </h1>

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
              setCredentials({ ...credentials, name: event.target.value })
            }
            type="text"
            className="input input-bordered w-full max-w-xs mt-5"
            placeholder="Name"
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

         <button className='btn mt-5 ml-5' onClick={register}>Join</button>   
         <button className='btn mt-5 ml-5' onClick={() => navigate("/")}>Already a user</button> 
         </div>
        
          
 
    </div>
  )
}

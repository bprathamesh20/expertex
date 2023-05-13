import React from 'react'
import { onLogOut } from '../../api/authApi';
import { BsBoxArrowRight } from "react-icons/bs";

export default function profilePopUp() {
  return (
    <div className='mr-5'>
      <div className="dropdown dropdown-bottom dropdown-end">
        <label tabIndex={0} className="btn m-1">
          <div className="avatar">
            <div className="w-8 rounded">
              <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" alt="Tailwind-CSS-Avatar-component" />
            </div>
          </div>
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-300  w-52">
          <li><a>Item 2</a></li>
          <li><a onClick={onLogOut}>Logout</a></li>

        </ul>
      </div>
    </div>
  )
}
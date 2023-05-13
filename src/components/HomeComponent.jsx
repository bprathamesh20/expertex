import React from 'react'
import Navbar from './navbar'
import Modal from './common/modal/modalComponent'
export default function HomeComponent() {
  return (
    <div>
        <Navbar isLoggedIn={true}/>
        <Modal/>
    </div>
  )
}

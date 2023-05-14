import React from 'react'
import Navbar from './navbar'
import Modal from './common/modal/modalComponent'
import PostComponent from './common/postComponent'
export default function HomeComponent() {
  return (
    <div>
      <Navbar isLoggedIn={true} />
      <Modal />
      <PostComponent/>
    </div>
  )
}

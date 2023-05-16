import React, { useEffect } from 'react'
import HomeComponent from '../components/HomeComponent'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebaseConfig'

export default function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/')
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <div>
      <HomeComponent />
    </div>
  )
}

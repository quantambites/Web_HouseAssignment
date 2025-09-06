import React , {useState} from 'react'
import Signout from '../authComponent/Signout'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Profile from './Profile'
import Footer from './Footer'

const Layout = () => {
    const [profileActive , setProfileActive] = useState(false)
  return (
    <>
      <Header 
      profileActive = {profileActive}
      setProfileActive = {setProfileActive}
      />

      {profileActive&&(
       <Profile />
      )}

      <Outlet />

      <Footer />
    </>
  )
}

export default Layout

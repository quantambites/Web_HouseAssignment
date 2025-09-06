import React , {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/component/pageComponent/Header'
import Profile from '@/component/pageComponent/Profile'
import Footer from '@/component/pageComponent/Footer'

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

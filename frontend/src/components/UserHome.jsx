import React from 'react'
import UserNavbar from './UserNavbar'
import TopPanelUser from './TopPanelUser'
import Sec1 from './Sec1'
import Sec2 from './Sec2'

const UserHome = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh', 
      backgroundColor: '#36454F',
      overflowX: 'hidden',
      overflowY: 'scroll',
      'msOverflowStyle': 'none',
      scrollbarWidth: 'none',
    }}>
      <UserNavbar />
      <TopPanelUser/>
      <Sec1/>
      <Sec2/>
    </div>
  )
}

export default UserHome
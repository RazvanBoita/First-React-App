import React from 'react'
import './MainPage.css'
import Content from '../../components/Content'
import Navbar from '../../components/Navbar'

const MainPage = () => {
  return (
    <div className="layout">
      <Navbar></Navbar>
       <Content></Content>
    </div>
  )
}

export default MainPage
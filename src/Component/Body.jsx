import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header';
import Footer from '../Component/Footer';

const Body = () => {
  return (
    <div>
      <main>
        <Header />
        <Outlet />
        <Footer/>
      </main>
      
    </div>
  )
}

export default Body

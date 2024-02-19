import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import ElementStyles from "./Element.module.css";

export default function Element() {
  return (
    <div className={ElementStyles.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

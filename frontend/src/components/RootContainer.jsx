import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import styles from "./RootContainer.module.css"


import { Outlet } from 'react-router-dom'

const RootContainer = () => {
  return (
    <div className={styles["root-container"]}>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootContainer
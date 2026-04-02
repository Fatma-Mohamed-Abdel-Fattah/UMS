// import React from 'react'
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import styles from './MasterLayout.module.css'
import { useState } from "react";

export default function MasterLayout() {
  let [collapse, setCollapse] = useState(false);
   return (
      <>
         <div className={styles.layout}>
            <div className={collapse ? styles.sidebarCollapsed : styles.sidebar}>
               <SideBar collapse={collapse} setCollapse={setCollapse}/>
            </div>
            <div className={styles.mainContent}>
               <div className={styles.navbar}>
                  <NavBar />
               </div>
               <div className={styles.pageContent}>
                  <Outlet />
               </div>
                
               
               
            </div>
         </div>
      </>
   );
}

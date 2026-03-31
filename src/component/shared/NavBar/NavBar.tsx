// import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import styles from "./NavBar.module.css";
export default function NavBar() {
   return (
      <>
         <div>
            <nav className="navbar bg-body-tertiary">
               <div className="container-fluid">
                  <h1 >
                     <a className={`navbar-brand ${styles.logo} `}>UMS</a>
                  </h1>
                  <form className="d-flex" role="search">
                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                     <button className="btn btn-outline-warning" type="submit">
                        Search
                     </button>
                     <IoIosNotificationsOutline size={50} />
                  </form>
               </div>
            </nav>
         </div>
      </>
   );
}

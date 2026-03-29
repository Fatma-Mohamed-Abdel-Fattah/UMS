import { useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import styles from './SideBar.module.css'
import { FaHome, FaUsers } from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import profile from "../../../assets/images/profile.jpg";
import { GoSidebarCollapse } from "react-icons/go";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
export default function SideBar() {
   const [collapse,setCollapse]=useState(false);
   const toggleCollapse=()=>{
      setCollapse(!collapse)
   }
   return (
      
      <>
         <div className={`${styles.sidebarContainer} vh-100`}>
            <Sidebar collapsed={collapse}  className="vh-100">
               {collapse ? <GoSidebarCollapse onClick={toggleCollapse} size={25} className="m-3"/>:<TbLayoutSidebarLeftCollapse  onClick={toggleCollapse} size={25} className="m-3"  />}
               <div className="text-center mb-3">
                  <div className={`my-2 ${styles.imgContainer}`}>
                     <img src={profile} alt="profile" className={styles.profileImage} />
                  </div>
                  
               <h5>Karthi Madesh</h5>
               <h6>Admin</h6>
               </div>
               <Menu  >
                  <MenuItem  icon={<FaHome />} component={<Link to="/dashbord" className={styles.menuItem} />}> Home</MenuItem>
                  <MenuItem icon={ <FaUsers />} component={<Link to="/dashbord/user-list" className={styles.menuItem} />}> Users</MenuItem>
                  <MenuItem icon={<MdOutlinePersonAddAlt1 />}  component={<Link to="/dashbord/add-user" className={styles.menuItem} />}> Add user</MenuItem>
                  <MenuItem icon={<RiProfileLine />} component={<Link to="/dashbord/profile" className={styles.menuItem} />}>Profile</MenuItem>
                  <MenuItem  icon={<LuLogOut />} className={styles.menuItem} > Logout</MenuItem>
               </Menu>
            </Sidebar>
         </div>
      </>
   );
}


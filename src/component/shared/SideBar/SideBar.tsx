import { useContext} from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SideBar.module.css";
import { FaHome, FaUsers } from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { GoSidebarCollapse } from "react-icons/go";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { AuthContext } from "../../context/AuthContext";
interface UserData {
   firstName: string;
   email: string;
   image: string;
}
interface AuthContextType {
   userData: UserData | null;
   logout: () => void;
}

export default function SideBar({collapse,setCollapse}:any) {
   const toggleCollapse = () => {
         setCollapse(!collapse);

   }
   
   let navigate = useNavigate();

   let handleLogOut = () => {
      logout();
      navigate("/login");
   };
   let { userData, logout } = useContext(AuthContext) as AuthContextType;
   // const [collapse, setCollapse] = useState(false);
   // const toggleCollapse = () => {
   //    setCollapse(!collapse);
   // };
   return (
      <>
         <div className={`${styles.sidebarContainer} `}>
            <Sidebar collapsed={collapse}   rootStyles={{
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  }}>
               {collapse ? (
                  <GoSidebarCollapse onClick={toggleCollapse} size={25} className="m-3" />
               ) : (
                  <TbLayoutSidebarLeftCollapse onClick={toggleCollapse} size={25} className="m-3" />
               )}
               <div className="text-center mb-3">
                  <div className={`my-2 ${styles.imgContainer}`}>
                     <img src={userData?.image} alt="profile" className={styles.profileImage} />
                  </div>

                  <h5>{userData?.firstName}</h5>
                  <h6>Admin</h6>
               </div>
               <Menu>
                  <MenuItem icon={<FaHome />} component={<Link to="/dashbord" className={styles.menuItem} />}>
                     {" "}
                     Home
                  </MenuItem>
                  <MenuItem icon={<FaUsers />} component={<Link to="/dashbord/user-list" className={styles.menuItem} />}>
                     {" "}
                     Users
                  </MenuItem>
                  <MenuItem icon={<MdOutlinePersonAddAlt1 />} component={<Link to="/dashbord/add-user" className={styles.menuItem} />}>
                     {" "}
                     Add user
                  </MenuItem>
                  <MenuItem icon={<RiProfileLine />} component={<Link to="/dashbord/profile" className={styles.menuItem} />}>
                     Profile
                  </MenuItem>
                  <MenuItem icon={<LuLogOut />} className={styles.menuItem} onClick={handleLogOut}>
                     {" "}
                     Logout
                  </MenuItem>
               </Menu>
            </Sidebar>
         </div>
      </>
   );
}

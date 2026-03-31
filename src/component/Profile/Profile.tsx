import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "./Profile.module.css";
interface User {
   firstName: string;
   lastName: string;
   email: string;
   phone: string;
   age: number;
   password: string;
   birthDate: string;
   image: string;
}
interface AuthContextType {
   userData: User | null;
}
export default function Profile() {
   let { userData } = useContext(AuthContext) as AuthContextType;
       console.log(userData)
   return (

      <>
         <div className="mx-3">
            <h4>Profile</h4>
            <hr />
            <form className={`shadow-lg rounded-2 m-5 p-4 ${styles.profileForm}`}>
              <div className={styles.imageontainer}>
                <img src={userData?.image } className="w-50 rounded-circle" alt="profileImg" />
              </div>
               <div className="row">
                  <div className="col-md-6">
                     <label>First Name</label>
                     <input className="form-control mb-2" type="text" value={userData?.firstName || ""} readOnly />
                  </div>

                  <div className="col-md-6">
                     <div>
                        <label>Last Name</label>
                        <input className="form-control mb-2" type="text" value={userData?.lastName || ""} readOnly />
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-md-6">
                        <label>Email</label>
                        <input className="form-control mb-2" type="email" value={userData?.email || ""} readOnly />
                     </div>
                     <div className="col-md-6">
                        <div>
                           <label>Age</label>
                           <input className="form-control mb-2" type="number" value={userData?.age || ""} readOnly />
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-md-6">
                        <label>Phone Number</label>
                        <input className="form-control mb-2" type="text" value={userData?.phone || ""} readOnly />
                     </div>

                     <div className="col-md-6">
                        <div>
                           <label>BirthDate</label>
                           <input className="form-control mb-2" type="date"   value={userData?.birthDate ? userData.birthDate.split("-").map(n => n.padStart(2, "0")).join("-"): "" } readOnly />
                        </div>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </>
   );
}

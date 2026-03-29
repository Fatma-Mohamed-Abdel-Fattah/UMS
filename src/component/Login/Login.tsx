// import React from "react";
import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
interface loginFormInput {
   username: string;
   password: string;
}
export default function Login() {
   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm<loginFormInput>();
const navigate=useNavigate();
   const onSubmit = async(data: loginFormInput) => {
      try {
         const response=await axios.post('https://dummyjson.com/auth/login',data)
         console.log(response.data);
         toast.success("wow logged successfully!");
         navigate('/dashbord')
      } 
      catch (error) {
         console.log(error)
         toast.error("something went wrong!");
      };
      }
   return (
      <>
         <div className={styles.loginContainer}>
            <div className="container-fluid">
               <div className="row vh-100 justify-content-center align-items-center">
                  <div className="col-md-4 bg-white p-3 rounded">
                     <h3 className="">User Management System</h3>
                     <h4 className="text-center">Sign In</h4>
                     <small className="text-center">Enter your credentials to access your account</small>
                     <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                           <label>User Name</label>
                           <input
                              className="form-control mb-2"
                              type="text"
                              placeholder="enter user name"
                              {...register("username", { required: "userName is required" })}
                           />
                           {errors.username && <span className="text-danger">{errors.username.message}</span>}
                        </div>
                        <div>
                           <label>Passsword</label>
                           <input
                              className="form-control mb-2"
                              type="password"
                              placeholder="enter password"
                              {...register("password", { required: "password is required"})}
                           />
                           {errors.password && <span className="text-danger">{errors.password.message}</span>}
                           <button className="btn btn-warning w-100 text-whit my-2">login</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

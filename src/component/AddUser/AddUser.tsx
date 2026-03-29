import axios from 'axios';
import { useEffect } from 'react';
// import React from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
interface addUserFormInput{
  firstName:string,
  lastName:string,
  email:string,
  age:number,
  phone:string,
  birthDate:Date,
}

export default function AddUser() {
    let navigate=useNavigate();
  // let {register,handleSubmit,formState:{errors}}=useForm<addUserFormInput>();
//   let onSubmit=async(data:addUserFormInput)=>{
//   try {
//     let response=await axios.post('https://dummyjson.com/users/add',data)
//     console.log(response.data)
//     toast.success("wow added successfully!");
//     navigate('/dashbord/user-list')
//   } catch (error) {
//     console.log(error)
//     toast.error("something went wrong!");
//   }
// }
// update 
const location = useLocation();
const userData= location.state;
const isEdit=userData ? true:false;
let {register,handleSubmit, formState:{errors},reset}=useForm<addUserFormInput>();
useEffect(()=>{
  if(isEdit) {
    reset(userData)
  }
},[isEdit, reset])
let onSubmittedToUpdate=async(data:addUserFormInput)=>{
  if(isEdit){
  let response=await axios.put(`https://dummyjson.com/users/${userData.id}`,data)
  toast.success("User updated successfully!");
  // navigate("/dashbord/user-list");

  }
  else {
        let response=await axios.post('https://dummyjson.com/users/add',data)
  }
   navigate("/dashbord/user-list");

}

  return (
  
    <>
    
    <div className=" mx-3">
      <h4>User List</h4>
    <hr/>
    <form onSubmit={handleSubmit(onSubmittedToUpdate)} className="shadow-lg rounded-2 m-5 p-4" >
      <div className="row">
        <div className="col-md-6">
           
            <label>User Name</label>
            <input
              className="form-control mb-2"
              type="text"
              placeholder="enter user name" {...register('firstName',{required:"firstName is required"})}/>
              {errors.firstName && <span className="text-danger">{errors.firstName.message}</span>}
            
        </div>
        
        <div className="col-md-6">
           <div>
                <label>User Name</label>
                <input
                  className="form-control mb-2"
                  type="text"
                  placeholder="enter user name" {...register('lastName',{required:"lastName is required"})}/>
                  {errors.lastName && <span className="text-danger">{errors.lastName.message}</span>}

            </div>
        </div>
      </div>
        <div className="row">
        <div className="col-md-6">
           
                           <label>Email</label>
                           <input
                              className="form-control mb-2"
                              type="email"
                              placeholder="enter user email" {...register("email",{required:"email is required",pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,message:"email is not valid"}})}/>
                              {errors.email && <span className="text-danger">{errors.email.message}</span>}
                           
        </div>
        
        <div className="col-md-6">
           <div>
                <label>Age</label>
                <input
                  className="form-control mb-2"
                  type="number"
                  placeholder="enter user age" {...register('age',{required:"age is required",max:{value:55,message:"age must be less than 55"},min:{value:18,message:"age must be greater than 18"}})}/>
                  {errors.age && <span className="text-danger">{errors.age.message}</span>}
                
            </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">

          <label>Phone Number</label>
          <input
            className="form-control mb-2"
            type="number"
            placeholder="enter user phone number" {...register("phone",{required:"phone is required"})}/>
            {errors.phone && <span className='text-danger'>{errors.phone.message}</span>}
        </div>
        
        <div className="col-md-6">
           <div>
                <label>BirthDate</label>
                <input
                  className="form-control mb-2"
                  type="date"
                  placeholder="enter user birthdate" {...register("birthDate",{required:"birthDate is required"})}/>
               {errors.birthDate && <span className='text-danger'>{errors.birthDate.message}</span>}
            </div>
        </div>
      </div>
      <div className='text-center'><button type="onSubmit" className="btn btn-warning text-white mt-2 w-50" >{isEdit ? "Update User" : "Add User"}</button>
        

      </div>
       
    </form>
    </div>
    </>
  )
}

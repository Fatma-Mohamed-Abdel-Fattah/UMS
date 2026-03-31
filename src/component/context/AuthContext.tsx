
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState, type ReactNode } from "react";
interface User{
   id:string;
   firstName:string;
   lastName:string;
   email:string;
   age:number;
   phone:string;
   birthDate:string;
}
interface AuthContextType {
userData:User | null;
  saveUserData:()=>void;

}
interface AuthContextProviderProps{
   children:ReactNode;
}
export let AuthContext=createContext<AuthContextType | null>(null);

export default function AuthContextProvider({children}:AuthContextProviderProps){
   let [userData,setUserData]=useState<User | null>(null)
   const saveUserData=async()=>{
      const encodedToken=localStorage.getItem("userToken");
      if(encodedToken){
         const decodedToken=jwtDecode<User>(encodedToken);
         console.log(decodedToken)
         // setUserData(decodedToken);
         try {
            let response=await axios.get(`https://dummyjson.com/users/${decodedToken.id}`)
            setUserData(response.data)
         }
         catch(err){
            console.log(err)
         }
      }
      
   }
   useEffect(()=>{
   if(localStorage.getItem("userToken")) {
      saveUserData()
   }
},[])
   return (
   <AuthContext.Provider value={{userData,saveUserData}}>{children}</AuthContext.Provider>)

}
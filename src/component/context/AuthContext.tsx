

import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState, type ReactNode } from "react";

// export let AuthContext = createContext(null);
// export default function AuthContextProvider(props:PropsWithChildren ) {
//    return <AuthContext.Provider>
//       {props.children}
//    </AuthContext.Provider>
// }
interface User{
   id:string;
   firstName:string;
   lastName:string;
   email:string;
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
   const saveUserData=()=>{
      const encodedToken=localStorage.getItem("userToken");
      if(encodedToken){
         const decodedToken=jwtDecode<User>(encodedToken);
         setUserData(decodedToken);
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
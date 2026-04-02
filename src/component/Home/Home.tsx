import styles from "./Home.module.css";
import { useContext } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { AuthContext } from "../context/AuthContext";
interface User{
  firstName:string;
  lastName:string;
}
interface AuthContextType{
  userData:User | null

}
export default function Home() {
  let {userData}=useContext(AuthContext) as AuthContextType
  const data = [
    { name: "Users", value: 120 },
    { name: "Admins", value: 10 },
    { name: "Active", value: 80 },
  ];
  return (
    <>
      <div className={`container-fluid px-3 mb-4 ${styles.home}  `}>
      <h3 className={`${styles.welcome} my-4`}>Welcome Back {userData?.firstName} {userData?.lastName}</h3>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data} className={styles.barchart}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#feaf00" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
    </>
  )
}

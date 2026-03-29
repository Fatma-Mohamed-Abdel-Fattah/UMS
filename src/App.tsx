import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AuthLayout from "./component/shared/AuthLayout/AuthLayout";
import NotFound from "./component/NotFound/NotFound";
import Login from "./component/Login/Login";
import MasterLayout from "./component/shared/MasterLayout/MasterLayout";
import Home from "./component/Home/Home";
import UsersList from "./component/UsersList/UsersList";
import AddUser from "./component/AddUser/AddUser";
import Profile from "./component/Profile/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import UsersList from "./component/UsersList/UsersList";

function App() {
   const routes = createHashRouter([
      {
         path: "/",
         element: <AuthLayout />,
         errorElement: <NotFound />,
         children: [
            { index: true, element: <Login /> },
            { path: "login", element: <Login /> }
         ]
      },
      { path: "dashbord", element: <MasterLayout />, errorElement: <NotFound /> ,
        children:[
          {index:true,element:<Home/>},
          {path:'home', element:<Home/>},
          {path:'user-list',element:<UsersList/>},
          {path:'add-user',element:<AddUser/>},
          {path:'profile',element:<Profile/>}
    ]}
   ]);
   return (
      <>
      <ToastContainer/>
         <RouterProvider router={routes}></RouterProvider>
      </>
   );
}

export default App;

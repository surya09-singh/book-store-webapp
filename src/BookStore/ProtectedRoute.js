import { useState} from "react";
import {  useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Admin from "./Admin";
import { useNavigate } from "react-router-dom";

const  ProtectedRoute = () => {
 const selecter = useSelector(state=>state.auth.role)

    return selecter == 'admin' ? <Admin /> : <Navigate to="/" />;
}

  export default ProtectedRoute;

// const ProtectedRoute = () => {
//     const navigate = useNavigate()
// const selector = useSelector(state=>state.auth.token)
// const role = useSelector(state=>state.auth.role)

//     if(selector){
//         if(role == 'admin'){
//            return <Navigate to="/admin" />
//         }else{
//             return <Navigate to="/user" />
//         }
//     }else{
//         return <Navigate to="/" />
//     }
    
// }
// export default ProtectedRoute;
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import User from "./User";

const  ProtectedUserRoute = () => {
    const selecter = useSelector(state=>state.auth.role)
    return selecter =='user' ? <User /> : <Navigate to="/"/>;
}
export default ProtectedUserRoute;
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contextapi/Authentication/Authentication";

export default function PrivateRoute({children}){
    const {auth} = useContext(AuthContext)
    if(auth){
        return children
    }else{
        return <Navigate to="/" />
    }
    
}
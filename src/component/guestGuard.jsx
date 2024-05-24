import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";


 export const GuestGuard = (props) => {
  const authContext = useContext(AuthContext);

  if (
    authContext.user && authContext.session && 
    Date.now() <= new Date(authContext.session?.validUntil).getTime()
  ) {
    
    return <Navigate to="/app"></Navigate>;
  }

  return  props.children;
 
};

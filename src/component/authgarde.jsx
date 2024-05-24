import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";


 export const AuthGuard = (props) => {
  const authContext = useContext(AuthContext);

  if (
    !authContext.user ||
    Date.now() > new Date(authContext.session?.validUntil).getTime()
  ) {
    
    return <Navigate to="/"></Navigate>;
  }

  return  props.children;
 
};

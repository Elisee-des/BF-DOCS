import { Navigate } from "react-router";
import { getUserData } from "../utility/Utils";

const RequireAuth=({ children }) =>{

    const  authed = getUserData();
    return authed ? children : <Navigate to="/" replace />;
  }

  export default RequireAuth;
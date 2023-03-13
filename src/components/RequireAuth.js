import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ children}) => {
    const location = useLocation();

    

    if(localStorage.getItem("token")){
        console.log(localStorage.getItem("token"))
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />
}

export default RequireAuth;
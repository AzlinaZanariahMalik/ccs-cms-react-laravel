import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export default function GuestLayout() {
     const {token} = useStateContext()
     //if token exist or user is authenticated
     if (token) {
        return <Navigate to="/" />
     }
    return(
        <div>
           
            {/* need to render the login we have to use outlet auth, will be the place where the child roles be render */}
            <Outlet />
        </div>
    )
}
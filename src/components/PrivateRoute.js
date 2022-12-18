// import {Navigate} from "react-router-dom"
// import useAuth from "./useAuth"

// export default function PrivateRoute({children,...rest}){
//     const auth=useAuth()

//     return auth?children : <Navigate to="/home"/>
// }

import {Navigate,Outlet} from "react-router-dom"
import useAuth from "./useAuth"

export default function PrivateRoute(){
    const auth=useAuth()

    return auth? <Outlet/> : <Navigate to='/home'/>
}
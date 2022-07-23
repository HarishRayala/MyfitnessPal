import { createContext, useState } from "react";
import axios from 'axios'
import Cookies from 'js-cookie'

const Auth=createContext()
const AuthContextProvider=({children})=>{
    let userData =Cookies.get("username") && JSON.parse(Cookies.get("username"));
    const [userdata, setuserData] = useState(userData);
    return <Auth.Provider value={{userdata,setuserData}} >
        {children}
    </Auth.Provider>
}
export  {Auth, AuthContextProvider}
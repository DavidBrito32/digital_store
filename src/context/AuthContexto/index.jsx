/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
const [userInfo, setUserInfo] = useState({
    name: "Alberto",
    isLogged: true
})

return (
    <AuthContext.Provider value={{userInfo, setUserInfo}}>
        {children}
    </AuthContext.Provider>
)

}
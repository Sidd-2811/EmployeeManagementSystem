import React, { createContext, useContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    // to get data from local storage
    const [userData, setUserData] = useState(null);
    useEffect(()=>{
        const{employees, admin} = getLocalStorage();
        setUserData({employees,admin});
    },[]);

    
    
  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider

export const useAuthContext = ()=>{
    return useContext(AuthContext);
}
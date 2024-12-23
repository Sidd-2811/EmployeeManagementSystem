import React, { createContext, useContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // localStorage.clear()
    // to get data from local storage
    const [userData, setUserData] = useState(null);
    useEffect(()=>{
        setLocalStorage()
        const{employees} = getLocalStorage();
        setUserData(employees);
    },[]);

    
    
  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}


export const useAuthContext = ()=>{
    return useContext(AuthContext);
}
export default AuthProvider
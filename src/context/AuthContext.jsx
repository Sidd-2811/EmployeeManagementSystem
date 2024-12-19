import React, { createContext } from 'react'

const AuthContext = ({children}) => {
      return (
    <div>{children}</div>
  )
}


// export const AuthContext = createContext();

// export const AuthProvider = ({children})=>{
//     return <AuthContext.Provider >
//         {children}
//     </AuthContext.Provider>
// }
// export const useAuthContext = ()=>{
//     return useContext(AuthContext);
// }

export default AuthContext
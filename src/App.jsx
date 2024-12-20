import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import {  useAuthContext } from './context/AuthProvider'
const App = () => {
  
const authData = useAuthContext();
  //  functionality 
  const[user,setUser] = useState(null);

  const[loggedInUserData,setLoggedInUserData] = useState(null);

   // to check which user loggedIn or not
  //  useEffect(()=>{
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role);
  //     }
  //   } 
  //   },[authData])
  
  const handleLogin = (email,password)=>{
    if(email == "admin@me.com" && password=="123"){
     setUser('admin');
     localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
    }
    else if(authData){
      const employee = authData.employees.find((e)=>email===e.email && password === e.password)
      if(employee)  {
        setUser('employee');
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}));
       }
    }
    else{
      alert("invalid credentials");
    }
  }

  return (
    <>
    {/* agar user emplty hai to login ni to '' */}
    {!user ?  <Login handleLogin={handleLogin}/> : '' }
     {user == 'admin' ? <AdminDashboard/> : (user === "employee" ?<EmployeeDashboard data={loggedInUserData}/> : null)}
    </>
  )
}

export default App
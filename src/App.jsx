// import './App.css'
import React, { useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext } from 'react'
import { Toaster } from 'react-hot-toast'
import { validateCredentials } from './utils/authUtils'
import { AuthContext } from './context/AuthProvider'
const App = () => {
  
  const [userData] = useContext(AuthContext)
  //  functionality : user kon hai admin || employee
  const[user,setUser] = useState(null);
  const[loggedInUserData,setLoggedInUserData] = useState(null);
   // to check which user loggedIn or not
    useEffect(()=>{
      const loggedInUser = localStorage.getItem('loggedInUser')
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role);
        setLoggedInUserData(userData.data)
      }
    },[])
  
  // const handleLogin = (email,password)=>{
  //   if(email == "admin@me.com" && password=="123"){
  //    setUser('admin');
  //    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
  //   }
  //   else if(userData){
  //     const employee = userData.find((e)=>email===e.email && password === e.password)
  //     if(employee)  {
  //       setUser('employee');
  //       setLoggedInUserData(employee)
  //       localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data : employee}));
  //      }
  //   }
  //   else{
  //     alert("invalid credentials");
  //   }
  // }
  const handleLogin = (email, password) => {
    const result = validateCredentials(email, password, userData)
    
    if (result.isValid) {
      setUser(result.role)
      setLoggedInUserData(result.data)
      localStorage.setItem('loggedInUser', JSON.stringify({
        role: result.role,
        data: result.data
      }))
      return true
    }
    return false
  }

  const renderDashboard = () => {
    if (!user) return <Login handleLogin={handleLogin} />
    if (user === "admin") return <AdminDashboard changeUser={setUser} />
    if (user === "employee") return <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
    return null
  }

  // return (
  //   <>
  //   {/* agar user empty hai to login ni to '' */}
  //   {!user ?  <Login handleLogin={handleLogin}/> : '' }
  //    {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user === "employee" ?<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
  //   </>
  // )
  return (
    <div className='bg-[#0a0a0a] min-h-screen'>
      <Toaster />
      {renderDashboard()}
    </div>
  )
}

export default App
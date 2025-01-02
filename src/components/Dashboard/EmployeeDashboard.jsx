// import React from 'react'
// import Header from '../Others/Header'
// import TaskListNumbers from '../Others/TaskListNumbers'
// import TaskList from '../../TaskList/TaskList'
// import { useAuthContext } from '../../context/AuthProvider'

// const EmployeeDashboard = (props) => {
//   const [userData] = useAuthContext();
//   return (
//    <div className='p-10 bg-[#1C1C1C] h-screen'>
//     {/* data : loggedInUser ka data hai  */}
//      <Header changeUser={props.changeUser} data={userData}/>
//      <TaskListNumbers data={props.data}/>
//      <TaskList data={props.data} />
//    </div>
   
//   )
// }

// export default EmployeeDashboard

import React, { useContext, useEffect } from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = ({ data, changeUser }) => {
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    if (userData) {
      const updatedEmployee = userData.find(emp => emp.id === data.id)
      if (updatedEmployee) {
        const updatedData = { role: "employee", data: updatedEmployee }
        localStorage.setItem('loggedInUser', JSON.stringify(updatedData))
      }
    }
  }, [userData, data.id])

  const currentEmployeeData = userData?.find(emp => emp.id === data.id) || data

  return (
    <div className='min-h-screen p-6 md:p-10'>
      <Header data={currentEmployeeData} changeUser={changeUser} />
      <TaskListNumbers data={currentEmployeeData} />
      <TaskList data={currentEmployeeData} />
    </div>
  )
}

export default EmployeeDashboard
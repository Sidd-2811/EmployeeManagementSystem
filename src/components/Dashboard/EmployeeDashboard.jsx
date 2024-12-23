import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../../TaskList/TaskList'
import { useAuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = (props) => {
  const [userData] = useAuthContext();
  return (
   <div className='p-10 bg-[#1C1C1C] h-screen'>
    {/* data : loggedInUser ka data hai  */}
     <Header changeUser={props.changeUser} data={userData}/>
     <TaskListNumbers data={props.data}/>
     <TaskList data={props.data} />
   </div>
   
  )
}

export default EmployeeDashboard
// import React, { useState } from 'react'
// import { useAuthContext } from '../../context/AuthProvider';
 
// const CreateTask = () => {

//   const[userData,setUserData] = useAuthContext();

//   const [taskTitle,setTaskTitle] = useState('');
//   const [taskDescription,setTaskDescription] = useState('');
//   const [taskDate,setTaskDate] = useState('');
//   const [assignTo,setAssignTo] = useState('');
//   const [category,setCategory] = useState('');

//   // Task create karne ke liye
//   const[newTask,setNewTask] = useState({});

//   const submitHandler = (e)=>{
//     e.preventDefault();
    
//     setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })
//     const data = userData;
    
//     data.forEach(function(curr){
//       if(assignTo == curr.firstName){
//         // data push karne ke liye
//         curr.tasks.push(newTask)
//         curr.taskCounts.newTask+=1;
//         // console.log(curr);
//       }
//     })
//     setUserData(data)
//     console.log(data);
    


//     // console.log(task)
//     setTaskTitle("");
//     setTaskDate("");
//     setAssignTo("");
//     setCategory("");
//     setTaskDescription("");
//   }

//   return (
//     <div className="p-5 bg-[#1C1C1C] w-full mt-7 rounded">
//     <form onSubmit={(e)=>submitHandler(e)}
//      className="flex flex-wrap w-full items-start justify-between">
//         <div className="w-1/2">
//         <div>
//         <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
//         <input
//          value={taskTitle}
//          onChange={(e)=>setTaskTitle(e.target.value)}
//          className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Make a video" />
//         </div>
//             {/* date */}
//       <div>
//         <h3 className="text-sm text-gray-300 mb-0.5">Date : 22/10/24</h3>
//         <input 
//         value={taskDate}
//         onChange={(e)=>setTaskDate(e.target.value)}
//          className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date" placeholder="dd/mm/yy" />
//       </div>
//       {/* assign  */}
//       <div>
//         <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
//         <input
//         value={assignTo}
//         onChange={(e)=>setAssignTo(e.target.value)}
//          className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="employee name" />
//       </div>
//       {/* category */}
//       <div>
//         <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
//         <input
//         value={category}
//         onChange={(e)=>setCategory(e.target.value)}
//          className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="design, dev, etc" />
//       </div>
//         </div>

        
//         {/* description */}
//         <div className="w-2/5 flex flex-col items-start">
//         <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
//         <textarea
//         value={taskDescription}
//         onChange={(e)=>setTaskDescription(e.target.value)}
//          className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 "></textarea>
//         </div>
        
//       {/* button */}
//       <button
//       className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full ">Create Task</button>
//     </form>
//   </div>
//   )
// }

// export default CreateTask

import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
// import { showSuccessToast, showErrorToast } from '../utils/toastConfig'
import { showSuccessToast,showErrorToast } from '../../utils/toastConfig'

const CreateTask = () => {
  const initialState = {
    taskTitle: '',
    taskDescription: '',
    taskDate: '',
    assignTo: '',
    category: ''
  }

  const [formData, setFormData] = useState(initialState)
  const [userData, setUserData] = useContext(AuthContext)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const createNewTask = () => ({
    taskTitle: formData.taskTitle,
    taskDate: formData.taskDate,
    category: formData.category,
    taskDescription: formData.taskDescription,
    active: false,
    newTask: true,
    failed: false,
    completed: false
  })

  const submitHandler = (e) => {
    e.preventDefault()
    
    try {
      const employee = userData.find(emp => emp.firstName === formData.assignTo)
      if (!employee) {
        showErrorToast('Employee not found!')
        return
      }

      const updatedData = userData.map(emp => {
        if (emp.firstName === formData.assignTo) {
          return {
            ...emp,
            tasks: [...emp.tasks, createNewTask()],
            taskCounts: {
              ...emp.taskCounts,
              newTask: emp.taskCounts.newTask + 1
            }
          }
        }
        return emp
      })

      setUserData(updatedData)
      showSuccessToast('Task created successfully!')
      setFormData(initialState)
    } catch (error) {
      showErrorToast('Failed to create task. Please try again.')
    }
  }

  return (
    <div className='bg-[#1e1e1e] p-6 rounded-xl shadow-md shadow-black/10 mt-6'>
      <h2 className='text-xl font-bold text-gray-100 mb-6'>Create New Task</h2>
      <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
        <div className='w-1/2'>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-300 mb-1'>Task Title</label>
            <input
              name="taskTitle"
              value={formData.taskTitle}
              onChange={handleInputChange}
              className='w-4/5 px-4 py-2 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all'
              type="text"
              placeholder='Make a UI design'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-300 mb-1'>Date</label>
            <input
              name="taskDate"
              value={formData.taskDate}
              onChange={handleInputChange}
              className='w-4/5 px-4 py-2 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all'
              type="date"
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-300 mb-1'>Assign To</label>
            <input
              name="assignTo"
              value={formData.assignTo}
              onChange={handleInputChange}
              className='w-4/5 px-4 py-2 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all'
              type="text"
              placeholder='employee name'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-300 mb-1'>Category</label>
            <input
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className='w-4/5 px-4 py-2 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all'
              type="text"
              placeholder='design, dev, etc'
              required
            />
          </div>
        </div>

        <div className='w-2/5'>
          <label className='block text-sm font-medium text-gray-300 mb-1'>Description</label>
          <textarea
            name="taskDescription"
            value={formData.taskDescription}
            onChange={handleInputChange}
            className='w-full px-4 py-2 h-44 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all resize-none'
            required
          />
          <button 
            type="submit"
            className='w-full mt-4 bg-emerald-500  hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition-all duration-200'
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
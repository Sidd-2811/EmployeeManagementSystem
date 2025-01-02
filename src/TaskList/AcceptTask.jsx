// import React from 'react'

// const AcceptTask = ({data}) => {
//   return (
//     <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
//     <div className='flex justify-between items-center'>
//         <h2 className='bg-blue-600 px-3 py-1 rounded text-sm'>{data.category}</h2>
//         <h3 className='text-sm'>{data.taskDate}</h3>
//         </div>
//         <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
//         <p className='text-sm mt-2'>{data.taskDescription}</p>

//         <div className='flex justify-between mt-4 '>
//             <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed </button>
//             <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed </button>
//         </div>
//     </div> 
//   )
// }

// export default AcceptTask

import React, { useContext } from 'react'
import { updateTaskStatus } from '../TaskList/taskUtils'
import { showSuccessToast, showFailureToast } from '../utils/toastConfig'
import { AuthContext } from '../context/AuthProvider'

const AcceptTask = ({ element }) => {
  const [userData, setUserData] = useContext(AuthContext)

  const handleStatusChange = (status) => {
    const updatedData = updateTaskStatus(userData, element, status)
    setUserData(updatedData)
    localStorage.setItem('employees', JSON.stringify(updatedData))
    
    if (status === 'completed') {
      showSuccessToast('Task completed successfully! 🎉')
    } else {
      showFailureToast('Task marked as failed')
    }
  }

  return (
    <div className='flex-shrink-0 w-[300px] bg-[#1e1e1e] border-2 border-yellow-900 rounded-xl p-5 hover:shadow-md transition-all duration-200'>
      <div className='flex justify-between items-center'>
        <span className='px-3 py-1 bg-yellow-900/50 text-yellow-300 rounded-lg text-sm font-medium'>{element.category}</span>
        <span className='text-sm text-gray-400'>{element.taskDate}</span>
      </div>
      <h2 className='mt-4 text-lg font-semibold text-gray-100'>{element.taskTitle}</h2>
      <p className='mt-2 text-sm text-gray-300'>{element.taskDescription}</p>
      <div className='flex gap-3 mt-5'>
        <button 
          onClick={() => handleStatusChange('completed')}
          className='flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200'
        >
          Complete
        </button>
        <button 
          onClick={() => handleStatusChange('failed')}
          className='flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200'
        >
          Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
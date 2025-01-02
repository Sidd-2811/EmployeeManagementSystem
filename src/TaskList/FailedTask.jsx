// import React from 'react'

// const FailedTask = ({data}) => {
//   return (
//     <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
//     <div className='flex justify-between items-center'>
//         <h2 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h2>
//         <h3 className='text-sm'>{data.taskDate}</h3>
//         </div>
//         <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
//         <p className='text-sm mt-2'>{data.taskDescription}</p>

//         <div className='mt-2'>
//             <button className='w-full'>Failed Task</button>
//         </div>
//     </div>
//   )
// }

// export default FailedTask

import React from 'react'

const FailedTask = ({ element }) => {
  return (
    <div className='flex-shrink-0 w-[300px] bg-[#252525] border-2 border-red-900 rounded-xl p-5 hover:shadow-md transition-all duration-200'>
      <div className='flex justify-between items-center'>
        <span className='px-3 py-1 bg-red-900/50 text-red-300 rounded-lg text-sm font-medium'>{element.category}</span>
        <span className='text-sm text-gray-400'>{element.taskDate}</span>
      </div>
      <h2 className='mt-4 text-lg font-semibold text-gray-100'>{element.taskTitle}</h2>
      <p className='mt-2 text-sm text-gray-300'>{element.taskDescription}</p>
      <div className='mt-5'>
        <div className='w-full bg-red-900/50 text-red-300 text-center py-2 rounded-lg font-medium'>
          Failed
        </div>
      </div>
    </div>
  )
}

export default FailedTask


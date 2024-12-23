import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h2 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h2>
        <h3 className='text-sm'>{data.taskDate}</h3>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>

        <div className='mt-2'>
            <button className='w-full'>Failed Task</button>
        </div>
    </div>
  )
}

export default FailedTask


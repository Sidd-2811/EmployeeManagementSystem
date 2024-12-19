import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[50%]  overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h2 className='bg-blue-600 px-3 py-1 rounded text-sm'>High</h2>
        <h3 className='text-sm'>20 Dec 2024</h3>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ad.</p>
    </div>
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h2 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h2>
        <h3 className='text-sm'>20 Dec 2024</h3>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ad.</p>
    </div>
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h2 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h2>
        <h3 className='text-sm'>20 Dec 2024</h3>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ad.</p>
    </div>
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h2 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h2>
        <h3 className='text-sm'>20 Dec 2024</h3>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ad.</p>
    </div>
        
    </div>
  )
}

export default TaskList
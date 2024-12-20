import React from 'react'

const AcceptTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h2 className='bg-blue-600 px-3 py-1 rounded text-sm'>High</h2>
        <h3 className='text-sm'>20 Dec 2024</h3>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ad.</p>

        <div className='flex justify-between mt-4 '>
            <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed </button>
            <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed </button>
        </div>
    </div> 
  )
}

export default AcceptTask
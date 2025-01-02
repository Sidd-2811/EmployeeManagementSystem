// import React, { useState } from 'react'

// const Header = (props) => {
// //   const [username,setUsername] = useState('');
// //  (data ? setUsername(data.firstName) : setUsername('admin'));

// const logOutUser = ()=>{
//   localStorage.setItem('loggedInUser','');
//   // yha se loggedInUser ki value khali ho jayegi or jaise hi value khali hogi to Login page open ho jayega
//   props.changeUser('')
//   // window.location.reload();
// }
//   return (
//     <div className='flex items-end justify-between'> 
//         <h1 className='text-2xl font-medium'>Hello <br/> 
//         <span className='text-3xl font-semibold'>username👋</span>
//          </h1>
//         <button onClick={logOutUser}
//         className='bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log out</button>
//     </div>
//   )
// }

// export default Header

import React from 'react'
import { showSuccessToast } from '../../utils/toastConfig'

const Header = ({ data, changeUser }) => {
    const logOutUser = () => {
        localStorage.setItem("loggedInUser", "")
        changeUser("")
        showSuccessToast('Successfully logged out!')
    }

    return (
        <div className='flex items-end justify-between bg-[#1e1e1e] p-6 rounded-xl shadow-md shadow-black/10'>
            <div>
                <h1 className='text-gray-400 font-medium'>Welcome back,</h1>
                <span className='text-2xl font-bold text-gray-100'>{data?.firstName ? data.firstName : 'Admin'} 👋🏻</span>
            </div>
            <button 
                onClick={logOutUser} 
                className='bg-emerald-500  hover:bg-emerald-600 text-white rounded-lg px-6 py-2 font-medium transition-all duration-200'
            >
                Log out
            </button>
        </div>
    )
}

export default Header
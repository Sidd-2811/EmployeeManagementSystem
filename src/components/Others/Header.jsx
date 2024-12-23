import React, { useState } from 'react'

const Header = (props) => {
//   const [username,setUsername] = useState('');
//  (data ? setUsername(data.firstName) : setUsername('admin'));

const logOutUser = ()=>{
  localStorage.setItem('loggedInUser','');
  // yha se loggedInUser ki value khali ho jayegi or jaise hi value khali hogi to Login page open ho jayega
  props.changeUser('')
  // window.location.reload();
}
  return (
    <div className='flex items-end justify-between'> 
        <h1 className='text-2xl font-medium'>Hello <br/> 
        <span className='text-3xl font-semibold'>username👋</span>
         </h1>
        <button onClick={logOutUser}
        className='bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log out</button>
    </div>
  )
}

export default Header
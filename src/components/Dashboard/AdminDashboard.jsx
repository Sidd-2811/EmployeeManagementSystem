import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = ({ changeUser }) => {
    return (
        <div className='min-h-screen bg-[#0a0a0a] p-6 md:p-10'>
            <Header changeUser={changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard
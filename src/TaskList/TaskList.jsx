import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  console.log(data)
  return (
    <div id='tasklist' className='h-[50%]  overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
    {
      data.tasks.map((curr)=>{
        if(curr.active){
          return <AcceptTask />
        }
        if(curr.newTask){
          return <NewTask />
        }
        if(curr.completed){
          return <CompleteTask />
        }
        if(curr.failed){
          return <FailedTask/>
        }
      })
    }
    </div>
  )
}

export default TaskList
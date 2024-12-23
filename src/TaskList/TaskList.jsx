import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[50%]  overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
    {
      data.tasks.map((curr,idx)=>{
        if(curr.active){
          return <AcceptTask key={idx} data={curr} />
        }
        if(curr.newTask){
          return <NewTask key={idx} data={curr} />
        }
        if(curr.completed){
          return <CompleteTask key={idx} data={curr} />
        }
        if(curr.failed){
          return <FailedTask key={idx} data={curr}/>
        }
      })
    }
    </div>
  )
}

export default TaskList
import React, { useState } from 'react'
import { useAuthContext } from '../../context/AuthProvider';
 
const CreateTask = () => {

  const[userData,setUserData] = useAuthContext();

  const [taskTitle,setTaskTitle] = useState('');
  const [taskDescription,setTaskDescription] = useState('');
  const [taskDate,setTaskDate] = useState('');
  const [assignTo,setAssignTo] = useState('');
  const [category,setCategory] = useState('');

  // Task create karne ke liye
  const[newTask,setNewTask] = useState({});

  const submitHandler = (e)=>{
    e.preventDefault();
    
    setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })
    const data = userData;
    
    data.forEach(function(curr){
      if(assignTo == curr.firstName){
        // data push karne ke liye
        curr.tasks.push(newTask)
        curr.taskCounts.newTask+=1;
        // console.log(curr);
      }
    })
    setUserData(data)
    console.log(data);
    


    // console.log(task)
    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
  }

  return (
    <div className="p-5 bg-[#1C1C1C] w-full mt-7 rounded">
    <form onSubmit={(e)=>submitHandler(e)}
     className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
        <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
        <input
         value={taskTitle}
         onChange={(e)=>setTaskTitle(e.target.value)}
         className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Make a video" />
        </div>
            {/* date */}
      <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Date : 22/10/24</h3>
        <input 
        value={taskDate}
        onChange={(e)=>setTaskDate(e.target.value)}
         className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date" placeholder="dd/mm/yy" />
      </div>
      {/* assign  */}
      <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
        <input
        value={assignTo}
        onChange={(e)=>setAssignTo(e.target.value)}
         className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="employee name" />
      </div>
      {/* category */}
      <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
        <input
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
         className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="design, dev, etc" />
      </div>
        </div>

        
        {/* description */}
        <div className="w-2/5 flex flex-col items-start">
        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
        <textarea
        value={taskDescription}
        onChange={(e)=>setTaskDescription(e.target.value)}
         className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 "></textarea>
        </div>
        
      {/* button */}
      <button
      className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full ">Create Task</button>
    </form>
  </div>
  )
}

export default CreateTask
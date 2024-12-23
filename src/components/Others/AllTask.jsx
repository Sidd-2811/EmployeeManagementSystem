import React from "react";
import { useAuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useAuthContext();
  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
     <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
            <h2 className="w-1/5 text-lg font-medium ">Employee Name</h2>
            <h3 className="w-1/5 text-lg font-medium ">New Task</h3>
            <h5 className="w-1/5 text-lg font-medium ">Active Task</h5>
            <h5 className="w-1/5 text-lg font-medium ">Completed</h5>
            <h5 className="w-1/5 text-lg font-medium ">Failed</h5>
          </div>

      <div className="">
      {userData.map((curr,idx) => {
        return (
          <div className="bg-black mb-2 py-2 px-4 flex justify-between rounded" key={idx}>
            <h2 className="w-1/5 text-lg font-medium  ">{curr.firstName}</h2>
            <h3 className="w-1/5 text-lg font-medium text-blue-600 ">{curr.taskCounts.newTask}</h3>
            <h5 className="w-1/5 text-lg font-medium text-yellow-400 ">{curr.taskCounts.active}</h5>
            <h5 className="w-1/5 text-lg font-medium text-green-600 ">{curr.taskCounts.completed}</h5>
            <h5 className="w-1/5 text-lg font-medium text-red-600 ">{curr.taskCounts.failed}</h5>
          </div>
        )
      })}
      </div>
    </div>
  );
};

export default AllTask;

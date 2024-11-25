import React from "react";

const TaskListNumber=({data})=>{
    return (
       <div className="flex mt-10 justify-between gap-5 Screen">

        <div className="rounded-xl py-6 px-9 w-[45%] bg-blue-400"> 
        <h2 className="text-5xl font-bold" >{data.tasksCount.newTask}</h2>
        <h3 className="text-xl font-medium" >New Task</h3>
        </div>

        <div className="rounded-xl py-6 px-9 w-[45%] bg-yellow-400"> 
        <h2 className="text-5xl font-bold" >{data.tasksCount.active}</h2>
        <h3 className="text-xl font-medium" >Accepted</h3>
        </div>

        <div className="rounded-xl py-6 px-9 w-[45%] bg-green-400"> 
        <h2 className="text-5xl font-bold" >{data.tasksCount.completed}</h2>
        <h3 className="text-xl font-medium" >Completed</h3>
        </div>

        <div className="rounded-xl py-6 px-9 w-[45%] bg-red-400"> 
        <h2 className="text-5xl font-bold" >{data.tasksCount.failed}</h2>
        <h3 className="text-xl font-medium" >Failed</h3>
        </div>
       </div>
       

    )
}

export default TaskListNumber
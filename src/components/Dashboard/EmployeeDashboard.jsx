import React from "react";
import Headers from "../Others/Headers";
import TaskListNumber from "../Others/TaskListNumber";
import TaskList from "../TaskList/TaskList";


const EmployeeDashboard=(props)=>{

    return (
        <>
        
        <div className="p-10 bg-[#1C1C1C] h-screen">
            <h1>{data.id}</h1>
            <Headers  changeUser={props.changeUser} data={props.data}></Headers>
            <TaskListNumber data={props.data}></TaskListNumber>
            <TaskList data={props.data}></TaskList>
        </div>
        </>
    )
}

export default EmployeeDashboard
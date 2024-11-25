import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList=({data})=>{

    console.log(data)
    return (
        <div id="tasklist" className="h-[55%] overflow-x-auto flex items-center justify-start gap-10 flex-nowrap py-5  mt-10">
            {
            data.tasks.map((elem,idx)=>{

                // console.log("thos ",elem.completed)
                if (elem.active){
                    return <AcceptTask key={idx} data={elem}></AcceptTask>
                }
                if (elem.newTask){
                    return <NewTask key={idx} data={elem}></NewTask>
                }
                if (elem.completed){
                    return <CompleteTask key={idx} data={elem}></CompleteTask>
                }
                else{
                    return <FailedTask key={idx} data={elem}></FailedTask>
                }
            })}

        </div>
    )
}
export default TaskList
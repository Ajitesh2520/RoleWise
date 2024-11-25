import React from "react";


const AcceptTask=({data})=>{
    return (

        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl">
                <div className="flex justify-between item-center">
                    <h3 className="bg-red-600 text-sm text-bold px-3 py-1 rounded">{data.category}</h3>
                    <h4 className="text-base">{data.date}</h4>
                </div>
                <h2 className="mt-5 text-xl font-bold">{data.title}</h2>
                <p className="text-sm ">
                       {data.description}</p>

                <div className="flex justify-between mt-4">
                    <button className="bg-green-500 py-1 px-2 text-sm">Mark as completed</button>
                    <button className="bg-red-500 py-1 px-2 text-sm">Mark as failed</button>
                </div>
        </div>

       

    )
}


export default AcceptTask
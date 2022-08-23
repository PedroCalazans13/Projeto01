import React from "react";
import './Task.css'

const Task = ({Task})=>{

    return ( 
    <>
    
    <div className="task-container">
        {Task.title}
    </div>
    
    </>
    )
}

export default Task;
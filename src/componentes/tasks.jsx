import React from "react";
import Task from "./task";
//UTILIZAÇAO DO PROPS
const Tasks = ({tasks})=>{

return (
    
<>
{tasks.map((tasks)=>(<Task Task={tasks}/>))}
</>
);

}

export default Tasks;
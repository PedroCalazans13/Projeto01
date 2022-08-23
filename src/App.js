
import './App.css';
import React, { useState } from 'react';
import Tasks from './componentes/tasks.jsx';
import AddTask from './componentes/AddTask';
 const App =()=> {
  const [tasks,Settasks] = useState([
    //DECLARAÇAO DE LISTA
    {
      id:1,
      title:'Estudar react',
      completed:false,
    },

    {
      id:2,
      title:'Fazer o guia de AC',
      completed:true,
    }
 
  

  ]);
  return (  
    <>
    <div className='container'>
      <AddTask/>
     <Tasks tasks={tasks}/>
    </div>
    </>
  );
}

export default App;

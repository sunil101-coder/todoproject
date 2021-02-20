import React, { useState } from 'react';
import Todolist from './Todolist';
import './App.css';
const App = () => {
  const task = "";
  const [tasklist, finallist] = useState(task);
  const [items, setitem] = useState([]);
  const change = (event) => {
    const { name, value } = event.target;
    finallist((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    })
  };

  const listofitem = () => {
    setitem((preValue) => {
      return [
        ...preValue,tasklist.task
      ];
    });
    finallist({task});
  };
  const clear=(id)=>{
    console.log('delete');
    setitem((preValue) => {
    return preValue.filter((arrelm,index)=>{
      return index!==id;

    });
    });

  };
  return (
    <div className="App">
      <div className="main-div">
        <div className="center-div">
          <h1>ToDo List</h1>
          <input type="text" placeholder="Enter task" name="task" value={tasklist.task} onChange={change} />
          <button onClick={listofitem}>+</button>
          <ul>
            {
              items.map((itemval,index) => {
                  return <Todolist 
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={clear}
                  />
                        
              })
            }
            

          </ul>
        </div>


      </div>
    </div>
  );
}

export default App;

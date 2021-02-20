import React from 'react'


const Todolist = (props) => {
    return (
        <>
        <div className="todo_style">
                   <li>
                   <button onClick={()=>{props.onSelect(props.id)}} className="clear-btn">X</button>
                   {props.text}
        </li>

        </div>
        </>
    )
};
export default Todolist

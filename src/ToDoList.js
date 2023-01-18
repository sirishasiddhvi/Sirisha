import React, { useState } from "react";
import {Remove} from './Remove';

export default function ToDoList(){
    const[task,setTask]=useState();
    const[todos,setTodos]=useState([]);
    const submitHandler=e=>{
       // e.preventDefault();
        alert('submitted');
        const newTodos=[...todos,task];
        setTodos(newTodos);
        setTask("");
    }
    const removeHandler=(indexValue)=>{
        const newTodos=todos.filter((todo,index)=>index!==indexValue);
        setTodos(newTodos);
    }
    return(
        <div><center>
            <h2>Todo</h2><br/><br/><br/>
            <input type='text' name='task'value={task} 
            onChange={(e)=>setTask(e.target.value)}/>&nbsp;&nbsp;
            <input type="submit" name="Add" value='Add' 
            onClick={submitHandler} /><br/><br/>
<Remove todos={todos} removeHandler={removeHandler}/>
            </center>
        </div>
    )
}
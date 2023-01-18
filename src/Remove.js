import React from "react";

export function Remove(todos,removeHandler){
    return(<div>
        {todos.map((todo,index)=>(
        <div key={index}>
            <h2>{todo}&nbsp;&nbsp;
            <button onClick={removeHandler(index)}>Remove</button></h2></div>))}
         </div>
    )
}
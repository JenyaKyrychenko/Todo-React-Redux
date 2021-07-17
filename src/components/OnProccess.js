import React, {useState} from "react";
import {TodoItem} from "./TodoItem";
import {useSelector} from "react-redux";

export const OnProccess = (props) => {
    const todos = useSelector(state=>state.todos)

    return (
        <div className="onproccess">
            <div className="onproccess__title">On Hold</div>
            {todos.map(todo=>{
                return <TodoItem key={todo.id} todo={todo}/>
            })}
        </div>
    )
}
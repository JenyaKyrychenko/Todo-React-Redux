import React from "react";
import {TodoItemCompleted} from "./TodoItemCompleted";
import {useSelector} from "react-redux";

export const Completed = (props) => {

    const todos = useSelector(state=>state.completedTodos)

    return (
        <div className="completedBlock">
            <div className="completed__title">Completed</div>
            {todos.map(todo=>{
                return <TodoItemCompleted key={todo.id} todo={todo}/>
            })}
        </div>
    )
}
import React from "react";
import listDecor from './../img/list_decor.svg'
import doneIcon from './../img/checked.svg'
import deleteIcon from './../img/cancel.svg'
import {useDispatch} from "react-redux";
import {deleteTodoAction, doneTodoAction} from "../store/todoReducer";

export const TodoItem = ({todo}) => {
    const dispatch = useDispatch()

    const deleteTodo = (id) =>{
        dispatch(deleteTodoAction(id))
    }

    const doneTodo = (completedTodo)=>{
        dispatch(doneTodoAction(completedTodo))
        dispatch(deleteTodoAction(completedTodo.id))
    }

    return (
        <div className="todoItem" id={todo.id}>
            <img src={listDecor} alt="list decoration"/>
            <span className='todoItem__text'>{todo.todoText}</span>
            <img src={doneIcon} alt="" className="todoItem__done" onClick={()=>doneTodo(todo)}/>
            <img src={deleteIcon} alt="" className="todoItem__delete" onClick={()=>deleteTodo(todo.id)}/>
        </div>
    )
}
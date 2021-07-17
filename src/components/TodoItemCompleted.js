import React from "react";
import listDecor from './../img/list_decor.svg'
import doneIcon from './../img/checked.svg'
import deleteIcon from './../img/cancel.svg'

export const TodoItemCompleted = ({todo}) => {
    return (
        <div className="todoItem completed">
            <img src={listDecor} alt="list decoration"/>
            <span className='todoItem__text'>{todo.todoText}</span>
            <img src={doneIcon} alt="" className="todoItem__done"/>
            <img src={deleteIcon} alt="" className="todoItem__delete"/>
        </div>
    )
}
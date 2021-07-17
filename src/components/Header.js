import React from "react";
import buttonIcon from '../img/plus-add2.svg'
import {useDispatch} from "react-redux";
import {addTodoAction} from "../store/todoReducer";

export const Header = (props) => {

    const dispatch = useDispatch()

    const addTodo = (todoText) =>{
        const todo = {
            id: Date.now(),
            todoText: todoText
        }
        dispatch(addTodoAction(todo))
    }

    return (
        <div className="header">
            <h1 className="header__title">
                You've got <span className="title__pink">7 tasks</span> today
            </h1>
            <button className="header__button" onClick={()=>addTodo(prompt())}>
                <img src={buttonIcon} alt="add todo" className="button__icon"/>
                Add New
            </button>
        </div>
    )
}
const ADD_TODO = 'ADD_TODO'
const DONE_TODO = 'DONE_TODO'
const DELETE_TODO = 'DELETE_TODO'

const defaultState = {
    todos: [],
    completedTodos: []
}

export const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case DELETE_TODO:
            return {...state, todos: [...state.todos.filter(todo => todo.id !== action.payload)]}
        case DONE_TODO:
            return {...state, completedTodos: [...state.completedTodos, action.payload]}
        default:
            return state
    }
}

export const addTodoAction = (payload) => ({type: ADD_TODO, payload})
export const deleteTodoAction = (payload) => ({type: DELETE_TODO, payload})
export const doneTodoAction = (payload) => ({type: DONE_TODO, payload})

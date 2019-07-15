import uuid from 'uuid';
import { combineReducers } from 'redux';

const emptyState = []
const initState = {
    todos:[]
}

const TodoReducer = (state = initState, action) => {
    switch (action.type) {

        case 'ADD_TODO':

            let newTodo = {
                id: uuid.v4(),
                title: action.title,
                completed: false,
                time: new Date()
            }

            let newTodos = [...state.todos, newTodo]

            return {
                ...state,
                todos: newTodos
            }
            
        
        case 'RESET_TODOS':
            return emptyState;

        case 'REMOVE_TODO':
            return [...state.todos.filter(todo => todo.id !== action.id)]

        case 'TOGGLE_TODO':
            //Figure out how to modify this by copying
            // return [...state.map(todo => {
            //     if (todo.id === action.id) {
            //         todo.completed = !todo.completed;
            //     }
            // })]
        case 'INIT_STATUS':
            return {
                todos: action.todos
            }

        default:
            return state
    }
}

export default combineReducers ({
    todos: TodoReducer
})
import uuid from 'uuid';
import { combineReducers } from 'redux';

const emptyState = []
const initState = [
        {
            key: uuid.v4(),
            title: "Add something to do above...",
            completed: false,
        },
        {
            key: uuid.v4(),
            title: "Tick the checkbox to cross out an item",
            completed: false,
        },
        {
            key: uuid.v4(),
            title: "Click the red X to remove an item",
            completed: false,
        }
]

const TodoReducer = (state = initState, action) => {
    switch (action.type) {

        case 'ADD_TODO':
            return [
                        ...state,
                        {
                            key: action.key,
                            title: action.title,
                            completed: false
                        }
                    ]
            
        
        case 'RESET_TODOS':
            return emptyState;

        case 'REMOVE_TODO':
            return [...state.filter(todo => todo.key !== action.key)]

        case 'TOGGLE_TODO':
                return Object.assign({}, state, {
                    todos: state.todos.map( todo => {
                        if (todo.key === action.key) {
                            todo.completed = !todo.completed;
                        }
                    })
                })

        default:
            return state
    }
}

export default combineReducers ({
    todos: TodoReducer
})
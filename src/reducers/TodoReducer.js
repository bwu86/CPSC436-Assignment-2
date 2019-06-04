import uuid from 'uuid';
import { combineReducers } from 'redux';

const emptyState = []
const initState = [
        {
            id: uuid.v4(),
            title: "Add something to do above...",
            completed: false,
            time: new Date()
        },
        {
            id: uuid.v4(),
            title: "Tick the checkbox to cross out an item",
            completed: false,
            time: new Date()
        },
        {
            id: uuid.v4(),
            title: "Click the red X to remove an item",
            completed: false,
            time: new Date()
        }
]

const TodoReducer = (state = initState, action) => {
    switch (action.type) {

        case 'ADD_TODO':
            return [
                        ...state,
                        {
                            id: uuid.v4(),
                            title: action.title,
                            completed: false,
                            time: new Date()
                        }
                    ]
            
        
        case 'RESET_TODOS':
            return emptyState;

        case 'REMOVE_TODO':
            return [...state.filter(todo => todo.id !== action.id)]

        case 'TOGGLE_TODO':
            //Figure out how to modify this by copying
            state.map(todo => {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed;
                }
            })
        default:
            return state
    }
}

export default combineReducers ({
    todos: TodoReducer
})
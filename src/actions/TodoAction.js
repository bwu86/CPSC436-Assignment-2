import uuid from 'uuid';

export const addTodo = (title) => {
    return {
        type: 'ADD_TODO',
        key: uuid.v4(),
        title,
    };
};

export const toggleTodo = (key) => {
    return {
        type: 'TOGGLE_TODO',
        key,
    };
};


export const removeTodo = (key) => {
    return {
        type: 'REMOVE_TODO',
        key,
    };
};

export const resetTodos = () => {
    return {
        type: 'RESET_TODOS'
    }
}

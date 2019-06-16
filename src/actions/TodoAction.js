
export const addTodo = (title, id) => {
    return {
        type: 'ADD_TODO',
        id: id,
        title,
    };
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id: id,
    };
};


export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id,
    };
};

export const resetTodos = () => {
    return {
        type: 'RESET_TODOS'
    }
}

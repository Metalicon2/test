export const addTodoAction = (todoArr) => {
    return {
        type: 'ADD_TODO',
        payload: todoArr
    }
}

export const removeTodoAction = (todoArr) => {
    return {
        type: 'REMOVE_TODO',
        payload: todoArr
    }
}

export const setPrevTodoAction = (todoArr) => {
    return {
        type: 'SET_PREV_TODO',
        payload: todoArr
    }
}

export const sortTodoAction = (todoArr) => {
    return {
        type: 'SORT_TODO',
        payload: todoArr
    }
}

export const checkTodoAction = (todoArr) => {
    return {
        type: 'CHECK_TODO',
        payload: todoArr
    }
}
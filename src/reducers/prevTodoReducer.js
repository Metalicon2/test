const prevTodoReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_PREV_TODO' : return action.payload;
        default : return state;
    }
}

export default prevTodoReducer;
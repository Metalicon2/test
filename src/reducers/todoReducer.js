const todoReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO' : return action.payload;
        case 'REMOVE_TODO': return action.payload;
        case 'SORT_TODO': return action.payload;
        case 'CHECK_TODO': return action.payload;
        default: return state;
    }
}

export default todoReducer;
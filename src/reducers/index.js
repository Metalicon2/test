import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import prevTodoReducer from './prevTodoReducer';

const allReducers = combineReducers({
    todoList: todoReducer,
    prevTodoList: prevTodoReducer
});

export default allReducers;
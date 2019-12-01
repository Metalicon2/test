import React, {useState} from 'react';
import {addTodoAction, setPrevTodoAction} from '../../actions/actions.js';
import {useSelector, useDispatch} from 'react-redux';
import uniqid from 'uniqid';
import './input.css';
import MediaQuery from 'react-responsive';

const InputComponent = () => {

    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todoList);

    const [todo, setTodo] = useState('');
    const [date, setDate] = useState('');
    const [isAllowed, setIsNotAllowed] = useState(true);
    
    const setTodoValue = (event) => {
        setTodo(event);
        setIsNotAllowed(false);
        if(event.length === 0){
            setIsNotAllowed(true);
        }
    }

    const setDateValue = (event = new Date()) => {
        setDate(event);
    }

    const addTodo = () => {
        if(todo.length === 0 || !todo){
            return;
        }
        const newArr = [...todoList];
        newArr.push({
            todo: todo,
            date: date,
            checked: false,
            id: uniqid()
        });
        dispatch(addTodoAction(newArr));
        dispatch(setPrevTodoAction([]));
    }

    return (
        <div>
        <MediaQuery minWidth={855}>
        <div className="input-group my-5 w-50 mx-auto form-group needs-validation" >
            <input onChange={(e) => setTodoValue(e.target.value)} className="form-control" placeholder="Enter todo..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <input onChange={(e) => setDateValue(e.target.value)} type='date' className="form-control" placeholder="Pick date..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
                <button disabled={isAllowed} onClick={() => addTodo()} style={{backgroundColor: 'rgb(0,80,255)', color: 'white'}} className="btn " type="button">Add Todo</button>
            </div>
        </div>
        </MediaQuery>
        <MediaQuery maxWidth={855}>
        <div className="input-group my-5 mx-auto form-group needs-validation">
            <input onChange={(e) => setTodoValue(e.target.value)} className="form-control" placeholder="Enter todo..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <input onChange={(e) => setDateValue(e.target.value)} type='date' className="form-control" placeholder="Pick date..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
                <button disabled={isAllowed} onClick={() => addTodo()} style={{backgroundColor: 'rgb(0,80,255)', color: 'white'}} className="btn " type="button">Add Todo</button>
            </div>
        </div>
        </MediaQuery>
        </div>
    );
}

export default InputComponent;
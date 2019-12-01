import React from 'react';
import './ListElem.css';
import {useSelector, useDispatch} from 'react-redux';
import {removeTodoAction, setPrevTodoAction, sortTodoAction, checkTodoAction} from '../../actions/actions';
import upArrow from '../../icons/angle-up-solid.svg';
import downArrow from '../../icons/angle-down-solid.svg';
import MediaQuery from 'react-responsive';

const ListElem = ({name, date, id, checked}) => {

    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todoList);

    const deleteTodo = () => {
        const filteredArr = todoList.filter(item => item.id !== id);
        dispatch(setPrevTodoAction(todoList));
        dispatch(removeTodoAction(filteredArr));
    }

    const sortTodo = (param) => {
        const newArr = [...todoList];
        const itemIndex = newArr.findIndex(item => item.id === id);
        const temp = newArr[itemIndex];
        if(param === 'up'){
            if(newArr[itemIndex - 1] !== undefined){
                newArr[itemIndex] = newArr[itemIndex - 1];
                newArr[itemIndex - 1] = temp;
            }
        }else if(param === 'down'){
            if(newArr[itemIndex + 1] !== undefined){
                newArr[itemIndex] = newArr[itemIndex+1];
                newArr[itemIndex + 1] = temp;
            }
        }
        dispatch(sortTodoAction(newArr));
    }

    const checkTodo = () => {
        const newArr = [...todoList];
        const item = newArr.find(item => item.id === id);
        item.checked = !item.checked;
        dispatch(checkTodoAction(newArr));
    }

    return (
            <div>
                <MediaQuery minWidth={855}>
                <div className="mb-3 border border-light rounded container">
                    <div className="row">
                        <div>
                            <input onClick={() => checkTodo()} checked={checked} onChange={() => {}} className="checkbox" type="checkbox" />
                        </div>
                        <div className="col-md-auto my-auto">
                        {name}
                        </div>
                        <div className="col-md-auto my-auto date">
                        {date}
                        </div>
                        <div className='col'></div>
                        <div style={{padding: 0}} className='col-md-auto my-auto'>
                            <img id='listelem' onClick = {() => sortTodo('up')}className='' height='30px' width='20x' src={upArrow} alt='uparrow'/>
                        </div>
                        <div className='col-md-auto my-auto'>
                            <img id='listelem' onClick={() => sortTodo('down')} className='' height='30px' width='20x' src={downArrow} alt='downarrow'/>
                        </div>
                        <div className="col-md-auto my-auto">
                        <button onClick={() => deleteTodo()} style={{color: 'white'}} type="button" className="close" aria-label="Close">&times;</button>
                        </div>
                    </div>
                </div>
                </MediaQuery>
                <MediaQuery maxWidth={855}>
                <div className="mb-3 border border-light rounded container">
                    <div className="row">
                        <div>
                            <input onClick={() => checkTodo()} checked={checked} onChange={() => {}} className="checkbox" type="checkbox" />
                        </div>
                        <div className="col-s-auto my-auto">
                        {name}
                        </div>
                        <div className="col-s-auto my-auto date">
                        {date}
                        </div>
                        <div className='col'></div>
                        <div style={{padding: 0}} className='col-xs-auto my-auto align-left'>
                            <img id='listelem' onClick = {() => sortTodo('up')}className='' height='30px' width='20x' src={upArrow} alt='uparrow'/>
                        </div>
                        <div className='col-xs-auto my-auto'>
                            <img id='listelem' onClick={() => sortTodo('down')} className='' height='30px' width='20x' src={downArrow} alt='downarrow'/>
                        </div>
                        <div className="col-xs-auto my-auto">
                        <button onClick={() => deleteTodo()} style={{color: 'white'}} type="button" className="close" aria-label="Close">&times;</button>
                        </div>
                    </div>
                </div>
                </MediaQuery>
            </div>
    );
}

export default ListElem;
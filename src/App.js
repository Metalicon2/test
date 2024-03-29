import React from 'react';
import './App.css';
import InputComponent from './components/InputComponent/InputComponent.js';
import List from './components/List/List.js';
import Scroll from './components/Scroll/Scroll';
import {useSelector, useDispatch} from 'react-redux';
import {addTodoAction, setPrevTodoAction} from './actions/actions';
import undoIcon from './icons/undo-alt-solid.svg';

const App = () => {

  const prevTodoList = useSelector(state => state.prevTodoList);
  const dispatch = useDispatch();

  //Undo esetén a legutóbbi törlés előtti array-t töltjük vissza és kiürítjük az törlés előtti állapotot tároló prevTodoList arrayt -> redux
  const handleUndo = () => {
    dispatch(addTodoAction(prevTodoList));
    dispatch(setPrevTodoAction([]));
  }

  return (
    <div className="App">
      <h1 className='my-4'>Todo App</h1>
      <InputComponent/>
      <Scroll>
        <List/>
      </Scroll>
      {
        //Akkor jelenítse meg az Undo-t, ha töröltünk elemet -> ha nincs [0] elem, undefined lesz ami falsy
        prevTodoList[0] ? 
          <div className='my-4'><button  onClick={() => handleUndo()} style={{backgroundColor: 'rgb(0,80,255)', color: 'white'}} className="btn" type="button">Undo&nbsp;&nbsp;
          <img alt='undo' width='20px' heigth='20px' src={undoIcon}/></button></div> : null
      }
    </div>
  );
}

export default App;
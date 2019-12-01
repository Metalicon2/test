import React from 'react';
import ListElem from './ListElem.js';
import {useSelector} from 'react-redux';
import MediaQuery from 'react-responsive';

const List = () => {

    const todoList = useSelector(state => state.todoList);

    //reszponzivítás, végigmapelünk a todo array-en
    return (
        <div>
        <MediaQuery minWidth={855}>
            <div className="w-50 mx-auto">
            {
                todoList.map((item, index) => {
                    return <ListElem name={item.todo} date={item.date} id={item.id} key={index} checked={item.checked}/>
                })
            }
            </div>
        </MediaQuery>
        <MediaQuery maxWidth={855}>
            <div className="mx-auto">
            {
                todoList.map((item, index) => {
                    return <ListElem name={item.todo} date={item.date} id={item.id} key={index} checked={item.checked}/>
                })
            }
            </div>
        </MediaQuery>
        </div>    
    );
}

export default List;
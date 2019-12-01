import React from 'react';
import './Scroll.css';

//görgethető legyen a todo lista, css-ben a scroller hide-olva van
const Scroll =  (props) => {
	return (
		<div className='scroll'>
			{props.children}
		</div>	
	);
}

export default Scroll;
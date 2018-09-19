import React from 'react';

//import './guess-count.css';

export default function GuessCount(props) {
	return (
	<h2 id='guessCount'>
		Guess # {props.guessCount}
	</h2>
	);
}
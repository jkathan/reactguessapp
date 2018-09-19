import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';


export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			guesses: [],
			feedback: 'Click to guess!',
			displayedFeedback: '',
			secretNumber: Math.floor(Math.random()*100)+1,
		};
	}

	restartGame() {
		this.setState({
			guesses: [],
			feedback: 'Click to guess!',
			secretNumber: Math.floor(Math.random()*100)+1,
		});
	}

	makeGuess(userGuess) {
		userGuess = parseInt(userGuess, 10)
		if (isNaN(userGuess)) {
      	this.setState({ feedback: 'Please enter a valid number' });
      	return;
		}
	let secretNumber = this.state.secretNumber;
	let feedback;
	if(secretNumber === userGuess){
		feedback = 'You got it!';
	} else if(Math.abs(secretNumber - userGuess) < 10){
		feedback = 'hot';
	} else if(Math.abs(secretNumber - userGuess) < 20 && Math.abs(secretNumber - userGuess) > 9){
		feedback = 'Kinda hot';
	} else if(Math.abs(secretNumber - userGuess) < 30 && Math.abs(secretNumber - userGuess) > 19){
		feedback = 'less than warm';
	} else {
		feedback = 'cold';
	}

	this.setState({
		feedback,
		guesses: [...this.state.guesses, userGuess]
		});
	}

	generateFeedback() {
		const {guesses} = this.state;
		let displayedFeedback = [];
		if (guesses.length > 0) {
			displayedFeedback = `${guesses.reverse().join(', ')}`
		}
		this.setState({ displayedFeedback });
	}

	render() {
		const { feedback, guesses, displayedFeedback} = this.state;
		const guessCount = guesses.length;

		return (
			<div> 
				<Header 
					onRestartGame = {() => this.restartGame()}
				/>
				<main role="main">
					<GuessSection
						feedback = {feedback}
						guessCount = {guessCount}
						onMakeGuess = {guess => this.makeGuess(guess)}
					/>
					<StatusSection 
						displayedFeedback = {displayedFeedback}
						guesses = {guesses}
					/>
					//<InfoSection />
				</main>
			</div>
		);
	}
}




import React from 'react';

import GuessForm from './GuessForm';
import Feedback from './feedback';

export default function GuessSection(props) {
  const { feedback, guessCount } = props;
  return (
    <section>
       <Feedback feedback={feedback} guessCount={guessCount} />
      <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
    </section>
  );
}
import React from 'react';

import GuessList from './guesslist';


export default function StatusSection(props) {
  const { guesses } = props;

  return (
    <section>
      <GuessList guesses={props.guesses} />
    </section>
  );
}
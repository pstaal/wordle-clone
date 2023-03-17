import React from 'react';
import GuessInput from '../GuessInput/GuessInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessResults from '../GuessResults/GuessResults';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
 
  const [guesses, setGuesses] = React.useState([]);
  
  const addGuess = (guess) => {
    
    let newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses}/>
      <GuessInput addGuess={addGuess}/>
    </>
  );
}

export default Game;

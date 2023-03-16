import React from 'react';
import GuessInput from '../GuessInput/GuessInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Guess from '../Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  
  const addGuess = (guess) => {
    let id = Math.random();
    let newGuesses = [...guesses, { id , guess }];
    setGuesses(newGuesses);
  }

  return (
    <>
      <div className="guess-results">
        {guesses.map(item => {
            return (
              <Guess key={item.id} guess={item.guess}/>
            )
        })}
      </div>
      <GuessInput addGuess={addGuess}/>
    </>
  );
}

export default Game;

import React from 'react';
import GuessInput from '../GuessInput/GuessInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
 
  const [guesses, setGuesses] = React.useState([]);
  const [gamestatus, setGameStatus] = React.useState('running');
  
  const addGuess = (guess) => {
    let newGuesses = [...guesses, guess];
    setGuesses(newGuesses);


    if (answer === guess) {
      setGameStatus("won")
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED){
      setGameStatus('lost');
    }

  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer}/>
      <GuessInput addGuess={addGuess} gamestatus={gamestatus}/>
      {gamestatus === 'won' && (
        <WonBanner numOfGuesses={guesses.length} />
      )}
      {gamestatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;

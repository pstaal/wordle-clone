import React from "react";
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({value, answer}) {

  let result = checkGuess(value, answer)
  return (
    <p className="guess">
      {range(5).map((num) => {
       return (<span key={num} className={`cell ${value ? result[num].status:  ""}`}>{value ? result[num].letter : undefined}</span>)
      })}
  </p>
  );
}

export default Guess;

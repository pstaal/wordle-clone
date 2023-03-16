import React from "react";

function GuessInput({addGuess}) {

  const [guess, setGuess] = React.useState('');

  const handleChange = (event) => {
    setGuess(event.target.value.toUpperCase());
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.info({ guess });
    addGuess(guess);
    setGuess('');
  }

  return (
  <form className="guess-input-wrapper" onSubmit={(event) => handleSubmit(event)}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" pattern="^.{5,5}$" value={guess} onChange={(event) => handleChange(event)}/>
  </form>);
}

export default GuessInput;

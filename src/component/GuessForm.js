import React from 'react';

function GuessForm() {

    function handleLetterGuess(event){
        event.preventDefault();
        console.log(event.target.letterGuess.value)
    }
    return(
        <React.Fragment>
<form onSubmit={handleLetterGuess}>
<input
type='text' pattern='[A-Za-z]{1}'
name='letterGuess'
title='please only enter one letter.'
placeholder='Guess a letter!'/>
<button type='submit'>Submit Guess</button>
</form>
</React.Fragment>
    );
}

export default GuessForm;
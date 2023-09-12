import React from 'react';

function GuessForm() {
    return(
        <React.Fragment>
<form>
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
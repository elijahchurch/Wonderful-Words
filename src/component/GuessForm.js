import React from 'react';
import PropTypes from "prop-types"

function GuessForm(props) {

    function handleLetterGuess(event){
        event.preventDefault();
        props.onSubmission(event.target.letterGuess.value);
        event.target.letterGuess.value = "";
    }
    
    return(
        <React.Fragment>
<form onSubmit={handleLetterGuess}>
<input
type='text' pattern='[A-Za-z]{1}'
name='letterGuess'
title='please only enter one letter.'
placeholder='Guess a letter!'
required/>
<button type='submit'>Submit Guess</button>
</form>
</React.Fragment>
    );
}

GuessForm.propTypes = {
    onSubmission: PropTypes.func
}

export default GuessForm;
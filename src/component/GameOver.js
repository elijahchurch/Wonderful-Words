import PropTypes from "prop-types";
import React from "react";
function GameOver(props) {

    return (

        <React.Fragment>
        <h3>You lose the Game!!!</h3> 
        <p>The word you were trying to guess was:</p>
        <h4>{props.chosenWord.join("")}</h4>
        </React.Fragment>
    )
} 

GameOver.propTypes = {
    chosenWord: PropTypes.array
}

export default GameOver;
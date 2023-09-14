import PropTypes from "prop-types";
import React from "react";

function Winner(props) {

    return (
        <React.Fragment>
        <h3>You win the Game!!!</h3> 
        <p>The word was:</p>
        <h4>{props.chosenWord.join("")}</h4>
        </React.Fragment>
    )
}

Winner.propTypes = {
    chosenWord: PropTypes.array
}

export default Winner;
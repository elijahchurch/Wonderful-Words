import React from "react";
import PropTypes from 'prop-types';

function WordDisplay(props) {

    return (
        
    <div>
    <h2>
    {props.displayedWord.map((element,index) => (
        <span key={index}>{element}</span>
        ))}
    </h2>
    </div>     
    )
}

WordDisplay.propTypes = {
    displayedWord: PropTypes.array
}

export default WordDisplay;
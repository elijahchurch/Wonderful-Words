import React from "react";
import PropTypes from "prop-types";

function MessageBox(props){

    return (
        <React.Fragment>
            <h3>{props.message}</h3>
        </React.Fragment>
    )
}

MessageBox.propTypes = {
    message: PropTypes.string
}

export default MessageBox; 
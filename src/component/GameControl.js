import React from "react";
import GuessForm from "./GuessForm";
import MessageBox from "./MessageBox";


class GameControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameStart: false,
            guesses: 6
        };
    }

    render(){
    return(
<React.Fragment>
    <GuessForm />
    <MessageBox />
</React.Fragment>
);
    
    }


}

export default GameControl;
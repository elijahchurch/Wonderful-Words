import React from "react";
import GuessForm from "./GuessForm";
import MessageBox from "./MessageBox";
import WordDisplay from "./WordDisplay";


class GameControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameStart: false,
            guesses: 6
        };
    }

    startGame = () => {
        this.setState({gameStart: true})
    };

    render(){
        let gameDisplay = null;
        if (this.state.gameStart){
            gameDisplay = 
            <div class="container">
                <WordDisplay/>
                <GuessForm />
                <MessageBox />
                <p id="guesses">Guesses Left: {this.state.guesses}</p>
            </div>
        }
        else {
            gameDisplay = <button onClick={this.startGame}>Start Game!</button>
        }
    return(
        <React.Fragment>
            {gameDisplay}
        </React.Fragment>
);
    
    }


}

export default GameControl;
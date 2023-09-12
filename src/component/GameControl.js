import React from "react";
import GuessForm from "./GuessForm";
import MessageBox from "./MessageBox";
import WordDisplay from "./WordDisplay";


class GameControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameStart: false,
            guesses: 6,
            wordList: [
                "MONKEY", "TURKEY", "BUNNY", "KITTEN", "BABOON", "PENGUIN"]
        };
    }

    startGame = () => {
        let randomRoll = Math.floor(Math.random() * this.state.wordList.length);
        console.log(randomRoll);
        let randomWord = this.state.wordList[randomRoll];
        console.log(randomWord);
        this.setState({gameStart: true})
    };

    render(){
        let gameDisplay = null;
        if (this.state.gameStart){
            gameDisplay = 
            <div className="container">
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
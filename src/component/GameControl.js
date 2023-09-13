import React from "react";
import GuessForm from "./GuessForm";
import MessageBox from "./MessageBox";
import WordDisplay from "./WordDisplay";
import { connect } from "react-redux";
import PropTypes from "prop-types";


class GameControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameStart: false,
            guesses: 6,
            wordList: [
                "MONKEY*RAN*AWAY", "TURKEY*JUMPS", "BUNNY*SWIMS", "KITTEN*GRUMBLES", "BABOON*SMILES", "PENGUIN*SLIDES"]
        };
    }

    startGame = () => {
        let randomRoll = Math.floor(Math.random() * this.state.wordList.length);
        console.log(randomRoll);
        let randomWord = this.state.wordList[randomRoll];
        console.log(randomWord);
        const { dispatch } = this.props;
        const action1 = {
            type: "MAKE_CHARARRAY",
            word: randomWord,
         
        }
        dispatch(action1);
        const action2 = {
            type: "BLANK_ARRAY",
            phrase: randomWord
        }
        dispatch(action2);
        this.setState({gameStart: true})
    };

    render(){
        let gameDisplay = null;
        if (this.state.gameStart){
            gameDisplay = 
            <div className="container">
                <WordDisplay displayedWord={this.props.displayedWord}/>
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

const mapStateToProps = state => {
    return {
        wordToGuess: state.wordToGuess,
        displayedWord: state.displayedWord,
    }
}

GameControl.propTypes = {
    wordToGuess: PropTypes.array,
    displayedWord: PropTypes.array
}

GameControl = connect(mapStateToProps)(GameControl);
export default GameControl;
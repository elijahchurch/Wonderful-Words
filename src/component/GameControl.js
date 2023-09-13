import React from "react";
import GuessForm from "./GuessForm";
import MessageBox from "./MessageBox";
import WordDisplay from "./WordDisplay";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GameOver from "./GameOver";
import Winner from "./Winner";


class GameControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameStart: false,
            message: "Welcome to Wonderful Words! Enter a letter to see if it is in the MyStErIoUs Wonderful Word. If it isn't in the word, you lose a guess, and if you have no guesses left, you lose the game!",
            guesses: 6,
            wordList: [
                "MONKEY", "TURKEY", "BUNNY", "KITTEN", "BABOON", "PENGUIN"],
            gameWon: true
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
            length: randomWord.length
        }
        dispatch(action2);
        this.setState({gameStart: true})
    };

    handleLetterFromForm = (letter) => {
        const upperLetter = letter.toUpperCase();
        if(this.props.wordToGuess.includes(upperLetter)) {
        const editArray = this.props.wordToGuess.map((element, index) => (element === upperLetter ? index : -1));
        const indexArray = editArray.filter(element => element !== -1);
        const action = {
            type: "ADD_LETTER",
            letter: upperLetter,
            indexPosition: indexArray
        }
        this.props.dispatch(action);  
        this.setState({message: `Nice job! The letter ${upperLetter} showed up in the word!`})
    } else {
        this.setState({guesses: this.state.guesses - 1}); 
        this.setState({message: `The letter ${upperLetter} wasn't in the word, you turkey!!`});
    }
    }

    render(){
        let gameDisplay = null;
        if(this.state.guesses === 0) {
            gameDisplay =
            <div className="container">
                <GameOver/>
            </div>
        }
        else if (!this.props.displayedWord.includes(" ") && this.props.displayedWord.length > 0) {
            gameDisplay = 
            <div className="container">
                <Winner/>
            </div>
        }        
        else if (this.state.gameStart){
            gameDisplay = 
            <div className="container">
                <WordDisplay displayedWord={this.props.displayedWord}/>
                <GuessForm onSubmission={this.handleLetterFromForm}/>
                <MessageBox message={this.state.message}/>
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
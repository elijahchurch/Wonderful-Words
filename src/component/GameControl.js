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
            message: null,
            guesses: null,
            wordList: [
                "INCONGRUENT", "HYMN", "AUDACIOUS", "SILHOUETTE", "ANEMONE", "SQUIRREL", "VACUUM", "DEPRECATE", "SOLILOQUY", "GYRO", "NAUSEOUS", "NEIGHBOR", "TANTAMOUNT", "TROUBADOUR", "INTRINSIC", "PENGUIN"],
            lettersGuessed: null
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
        this.setState({gameStart: true});
        this.setState({lettersGuessed: []});
        this.setState({guesses: 6});
        this.setState({message: "Welcome to Wonderful Words! Enter a letter to see if it is in the MyStErIoUs Wonderful Word. If it isn't in the word, you lose a guess, and if you have no guesses left, you lose the game!"});
    };

    handleLetterFromForm = (letter) => {
        const upperLetter = letter.toUpperCase();
        if(this.state.lettersGuessed.includes(upperLetter)) {
            this.setState({message: `You already guessed the letter ${upperLetter}`})
        } else {
                const updatedLetters = (this.state.lettersGuessed).concat([...upperLetter]);
                this.setState({lettersGuessed: updatedLetters});
                if(this.props.wordToGuess.includes(upperLetter)) {
                const editArray = this.props.wordToGuess.map((element, index) => (element === upperLetter ? index : -1));
                const indexArray = editArray.filter(element => element !== -1);
                const action = {
                    type: "ADD_LETTER",
                    letter: upperLetter,
                    indexPosition: indexArray
                }
                this.props.dispatch(action);  
                this.setState({message: `Nice job! The letter ${upperLetter} showed up in the word!`});
            } else {
                this.setState({guesses: this.state.guesses - 1}); 
                this.setState({message: `The letter ${upperLetter} wasn't in the word, you turkey!!`});
            }
        }
    }

    render(){
        let gameDisplay = null;
        let gameButton = <button className="gameButton" onClick={this.startGame}>Start Game!</button>
        if(this.state.guesses === 0) {
            gameButton = <button className="gameButton" onClick={this.startGame}>New Game</button>
            gameDisplay =
            <div className="container small">
                <GameOver chosenWord={this.props.wordToGuess}/>
            </div>
        }
        else if (!this.props.displayedWord.includes(" ") && this.props.displayedWord.length > 0) {
            gameButton = <button className="gameButton" onClick={this.startGame}>New Game</button>
            gameDisplay = 
            <div className="container small">
                <Winner chosenWord={this.props.wordToGuess}/>
            </div>
        }        
        else if (this.state.gameStart){
            gameButton = null;
            gameDisplay = 
            <div className="container">
                <WordDisplay displayedWord={this.props.displayedWord}/>
                <GuessForm onSubmission={this.handleLetterFromForm}/>
                <MessageBox message={this.state.message}/>
                <p id="guesses">Guesses Left: {this.state.guesses}</p>
            </div>
        }
        // else {
        //     gameDisplay = 
        // }
    return(
        <React.Fragment>
            {gameDisplay}
            {gameButton}
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
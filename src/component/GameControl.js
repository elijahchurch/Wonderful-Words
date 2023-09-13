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
                "MONKEY", "TURKEY", "BUNNY", "KITTEN", "BABOON", "PENGUIN"]
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
        const editArray = this.props.wordToGuess.map((element, index) => (element === upperLetter ? index : -1));
        const indexArray = editArray.filter(element => element !== -1);
        const action = {
            type: "ADD_LETTER",
            letter: upperLetter,
            indexPosition: indexArray
        }
        this.props.dispatch(action);        
    }

    render(){
        let gameDisplay = null;
        if (this.state.gameStart){
            gameDisplay = 
            <div className="container">
                <WordDisplay displayedWord={this.props.displayedWord}/>
                <GuessForm onSubmission={this.handleLetterFromForm}/>
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
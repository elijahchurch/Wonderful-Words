import wordToGuessReducer from "./wordToGuessReducer";
import blankWordReducer from "./blankWordReducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    wordToGuess: wordToGuessReducer,
    displayedWord: blankWordReducer
});

export default rootReducer;

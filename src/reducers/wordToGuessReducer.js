const wordToGuessReducer = (state = [], action) => {
    const { word } = action;
    switch(action.type) {
    case "MAKE_CHARARRAY":
        let charArray = Array.from(word);
        return charArray;
    default: 
        return state;
    }
}

export default wordToGuessReducer;
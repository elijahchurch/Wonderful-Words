const blankWordReducer = (state = [], action) => {
    const { length, letter, indexPosition } = action;
    switch(action.type) {
        case "BLANK_ARRAY":
        let blankArray = Array.from(" ".repeat(length));
        return blankArray;
        case "ADD_LETTER":
            const newState = state.map((element, index) => {
                if(index === action.indexPosition) {
                    return action.letter;
                }
                else {
                    return element;
                }
            })
            return newState;
        default:
            return state;
    } 
}

export default blankWordReducer;
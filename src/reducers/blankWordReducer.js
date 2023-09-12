const blankWordReducer = (state = [], action) => {
    const { length } = action;
    switch(action.type) {
        case "BLANK_ARRAY":
        let blankArray = Array.from(" ".repeat(length));
        return blankArray;
        default:
            return state;
    } 
}

export default blankWordReducer;
const blankWordReducer = (state = [], action) => {
    const { phrase } = action;
    switch(action.type) {
        case "BLANK_ARRAY":
        const editedPhrase = phrase.replace(/\w/g, " ")
        let blankArray = Array.from(editedPhrase);
        
        return blankArray;
        default:
            return state;
    } 
}

export default blankWordReducer;
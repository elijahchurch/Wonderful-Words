import blankWordReducer
 from "../../reducers/blankWordReducer";

 describe("blankWordReducer", () => {
    let action;

    const state = [" ", " ", " "]

    test("Should return a blank array based on the length entered", () => {
        action = {
            type: "BLANK_ARRAY",
            length: 5
        }
        expect(blankWordReducer([], action)).toEqual([" ", " ", " ", " ", " "]) 
    });

    test("Should return an array with a replaced letter for a single index", () => {
        action = {
            type: "ADD_LETTER",
            letter: "a",
            indexPosition: 1
        }
        expect(blankWordReducer(state, action)).toEqual([" ", "a", " "])
    });
 })
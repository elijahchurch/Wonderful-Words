import blankWordReducer
 from "../../reducers/blankWordReducer";

 describe("blankWordReducer", () => {
    let action;

    test("Should return a blank array based on the length entered", () => {
        action = {
            type: "BLANK_ARRAY",
            length: 5
        }
        expect(blankWordReducer([], action)).toEqual([" ", " ", " ", " ", " "]) 
    });
 })
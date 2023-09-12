import wordToGuessReducer from "../../reducers/wordToGuessReducer";

describe("wordToGuessReducer", () => {

    let action;

    test("Should return default state", () => {
        expect(wordToGuessReducer([], {type: null})).toEqual([])
    });

    test("MAKE_CHARARRAY action should take a string and make the state a character array", () => {
        action = {
            type: "MAKE_CHARARRAY",
            word: "jason"
        }
        expect(wordToGuessReducer([], action)).toEqual(["j", "a", "s", "o", "n"])
    });
})
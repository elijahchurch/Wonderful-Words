import wordToGuessReducer from "../../reducers/wordToGuessReducer";

describe("wordToGuessReducer", () => {
    test("Should return default state", () => {
        expect(wordToGuessReducer([], {type: null})).toEqual([])
    })
})
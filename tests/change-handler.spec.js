// These test cases are all unfinished. We will finish them together.
describe("tests for change-handler", function() {

    // Set up a test below...
    it("what do I write here?", function() {
        // Remember, you can arrange, act, and assert...start small
        let changeHandler = new ChangeHandler();
        expect(changeHandler.insertCoin('penny')).toBe(1);
        expect(changeHandler.insertCoin('nickle')).toBe(5);
        expect(changeHandler.insertCoin('dime')).toBe(10);
        expect(changeHandler.insertCoin('quarter')).toBe(25);
        expect(changeHandler.insertCoin('ducat')).toBe(undefined);
    });
});
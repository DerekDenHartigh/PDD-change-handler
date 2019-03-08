// These test cases are all unfinished. We will finish them together.
describe("tests for ChangeHandler class", function() {

    // tests for insertCoin();
    it("insertCoin() correctly modifies cashTendered", function() {
        // Remember, you can arrange, act, and assert...start small
        let changeHandler = new ChangeHandler();
        expect(changeHandler.insertCoin('penny')).toBe(1);
        expect(changeHandler.insertCoin('pEnNy')).toBe(1);
        expect(changeHandler.insertCoin('nickle')).toBe(5);
        expect(changeHandler.insertCoin('dime')).toBe(10);
        expect(changeHandler.insertCoin('quarter')).toBe(25);
        expect(changeHandler.insertCoin('ducat')).toBe(undefined);
    });

    it("checks isPaymentSufficient() to be set to true/false if you've paid enough to purchase item", function() {
        let changeHandler = new ChangeHandler(100);  // arrange
        changeHandler.cashTendered = 25; // act
        expect(changeHandler.isPaymentSufficient()).toBe(false);// assert
        
        let changeHandler2 = new ChangeHandler(100);  // arrange
        changeHandler2.cashTendered = 100; // act
        expect(changeHandler2.isPaymentSufficient()).toBe(true); // assert
    
        let changeHandler3 = new ChangeHandler(100);  // arrange
        changeHandler3.cashTendered = 125; // act
        expect(changeHandler3.isPaymentSufficient()).toBe(true); // assert
    });
    // I think I have a problem with my howMuchIOweU & oopsIOverPaid tests, I can't get them to fail by putting in the wrong number.
    it("checks howMuchIOweU() to see if it modifies this.amountDue appropriately", function(){
        let changeHandler = new ChangeHandler(100);  // arrange
        changeHandler.cashTendered = 0; // act
        changeHandler.howMuchIOweU();
        expect(changeHandler.howMuchIOweU()).toBe(100);// assert

        let changeHandler2 = new ChangeHandler(100);  // arrange
        changeHandler2.cashTendered = 25; // act
        changeHandler2.howMuchIOweU();
        expect(changeHandler2.howMuchIOweU()).toBe(75);// assert
        
        // let changeHandler3 = new ChangeHandler(100);  // arrange
        // changeHandler3.cashTendered = 100; // act
        // changeHandle3.howMuchIOweU();
        // expect(changeHandler3.amountDue===(0)); // assert
    
        // let changeHandler4 = new ChangeHandler(100);  // arrange
        // changeHandler4.cashTendered = 125; // act
        // changeHandler4.howMuchIOweU();
        // expect(changeHandler4.amountDue===(0)); // assert
    });
    it("checks oopsIOverPaid() to see if the proper changeDue is returned if cashTendered>amountDue", function(){
        let changeHandler = new ChangeHandler(100);  // arrange, amountDue doesn't matter for this function
        changeHandler.cashTendered = 100; // act
        expect(changeHandler.oopsIOverpaid()).toBe(undefined);
        let changeHandler2 = new ChangeHandler(100);
        changeHandler2.cashTendered = 500;
        expect(changeHandler2.oopsIOverpaid()).toBe(400);
    })
    // it("checks giveChange() to see if the proper change object is returned.", function(){
    //     let changeHandler = new ChangeHandler();  // arrange
    //     changeHandler.changeDue = 1; // act
    //     changeHandler.howMuchIOweU();
    //     expect(this.);// assert
    // })
});
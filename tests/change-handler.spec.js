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
    it("checks howMuchIOweU() to see if it modifies this.change appropriately", function(){
        let changeHandler = new ChangeHandler(100);  // arrange
        changeHandler.cashTendered = 25; // act
        changeHandler.howMuchIOweU();
        expect(changeHandler.changeDue===(0));// assert
        
        let changeHandler2 = new ChangeHandler(100);  // arrange
        changeHandler2.cashTendered = 100; // act
        changeHandler.howMuchIOweU();
        expect(changeHandler2.changeDue===(0)); // assert
    
        let changeHandler3 = new ChangeHandler(100);  // arrange
        changeHandler3.cashTendered = 125; // act
        changeHandler.howMuchIOweU();
        expect(changeHandler3.changeDue===(25)); // assert
    });
    // it("giveChange returns the obj changeReturn with coins in optimal denominations (most quarters, least pennies possible)", function() {
    //     let changeHandler = new ChangeHandler();
    //     expect(changeHandler.giveChange(125).changeReturn.quarters).toBe(5);
    // });
});

/*
it("receiveAttackDamage removes health", function() {
// Arrange
var player = new Character({
health: 20
});
// Act
player.receiveAttackDamage(5);
// Assert
expect(player.health).toBe(15);
});
*/
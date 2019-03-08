/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */

// Variable declaration:
let type, coin, change, cashTendered, changeReturn;
class ChangeHandler {

    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */

    insertCoin(type) {
        let coin = type.toLowerCase();
        switch(coin){
            case "penny": this.cashTendered =+ 1; return this.cashTendered;
            case "nickle": this.cashTendered =+ 5; return this.cashTendered;
            case "dime": this.cashTendered =+ 10; return this.cashTendered;
            case "quarter": this.cashTendered =+ 25; return this.cashTendered;
            // case "half-dollar": // Just me being extra
            // case "half dollar": cashTendered =+ 50; return cashTendered;
            default: console.error(`${type} is not a valid coin!`);
        }
    };

    /**
     * Returns true if enough coins have been inserted to at least meet the this.amountDue
     */
    isPaymentSufficient() {
        if (this.cashTendered>this.amountDue){
            this.amountDue = this.amountDue-this.cashTendered;
            console.log(`Insufficient funds, please insert ${this.amountDue} more cents to purchase item.`);
            return this.amountDue;
        }
        if (this.cashTendered=this.amountDue){
            this.amountDue = 0;
            console.log(`Huzzah! you have purchased your item, enjoy!`)
            return this.amountDue;
        }
        if (this.cashTendered>this.amountDue)
            change = this.cashTendered-this.amountDue;
            console.log(`Huzzah! you have overpaid for your item, dispensing item & ${change} cents`);
            return change;
    };

    giveChange() {
        // TODO return the correct change in the following format...

        let changeReturn = {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        }

        if (change%25===0){
            changeReturn.quarters = change/25;
        }
        else if (change%25===1){
            changeReturn.quarters = math.floor(change/25);
            change -= (math.floor(change/25)*25); // takes all the quarters out, remaining change<25
        }
        else if (change%10===0){
            changeReturn.dimes = change/10;
        }
        else if (change%10===1){
            changeReturn.dimes = math.floor(change/10);
            change -= (math.floor(change/10)*10); // change remaining < 10
        }
        else if (change%5===0){
            changeReturn.nickles = change/5;
        }
        else if (change%5===1){
            changeReturn.nickles = math.floor(change/5);
            change -= (math.floor(change/5)*5);
        }
        else { // pennies is all thats left
            changeReturn.pennies = change;
        };
        return changeReturn;  // return the object with modified denomination counts.
    };
};
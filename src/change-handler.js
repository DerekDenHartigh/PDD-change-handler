/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */

// Variable declaration:
let type, coin, change;
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
            case "penny": cashTendered =+ 1; return cashTendered;
            case "nickle": cashTendered =+ 5; return cashTendered;
            case "dime": cashTendered =+ 10; return cashTendered;
            case "quarter": cashTendered =+ 25; return cashTendered;
            case "half-dollar": // Just me being extra
            case "half dollar": cashTendered =+ 50; return cashTendered;
            default: console.error(`${type} is not a valid coin!`);
        }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
        if (cashTendered>amountDue){
            amountDue = amountDue-cashTendered;
            console.log(`Insufficient funds, please insert ${amountDue} more cents to purchase item.`);
            return amountDue;
        }
        if (cashTendered=amountDue){
            amountDue = 0;
            console.log(`Huzzah! you have purchased your item, enjoy!`)
            return amountDue;
        }
        if (cashTendered>amountDue)
            change = cashTendered-amountDue;
            console.log(`Huzzah! you have overpaid for your item, dispensing item & ${change} cents`);
            return change;
    }

    giveChange() {
        // TODO return the correct change in the following format...

        let changeReturn = {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        }
        if (change%25=0){
            changeReturn.quarters = change/25;
        }
        if (change%25=1){
            changeReturn.quarters = math.floor(change/25);
            change -= (math.floor(change/25)*25); // takes all the quarters out, remaining change<25
        }
        if (change%10=0){
            changeReturn.dimes = change/10;
        }
        if (change%10=1){
            changeReturn.dimes = math.floor(change/10);
            change -= (math.floor(change/10)*10); // change remaining < 10
        }
        if (change%5=0){
            changeReturn.nickles = change/5;
        }
        if (change%5=1){
            changeReturn.nickles = math.floor(change/5);
            change -= (math.floor(change/5)*5);
        }
        else { // pennies is all thats left
            changeReturn.pennies = change;
        }
        return changeReturn;  // return the object with modified denomination counts.
    }
}
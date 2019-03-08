/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */

// Variable declaration:
let type, coin, change, cashTendered, changeReturn, quarters, dimes, nickels, pennies, someChange;
class ChangeHandler {

    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
        this.changeDue = 0;
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
            default: console.error(`${type} is not a valid coin!`);
        }
        this.isPaymentSufficient();
        this.howMuchIOweU();
    };

    /**
     * Returns true if enough coins have been inserted to at least meet the this.amountDue
     */
    isPaymentSufficient() {
        if (this.cashTendered<this.amountDue){
            this.amountDue = this.amountDue-this.cashTendered; // shouldn't change amountDue in changeHandle since it isn't returned?
            console.log(`Insufficient funds, please insert ${this.amountDue} cents more to purchase item.`);
            return false;
        }
        else if (this.cashTendered===this.amountDue){
            this.amountDue = 0; // not really necessary?
            console.log(`Huzzah! you have purchased your item, enjoy!`)
            return true;
        }
        else if (this.cashTendered>this.amountDue){
            someChange = this.cashTendered-this.amountDue;
            this.amountDue = 0; // again, not really necessary, since it isn't returned
            console.log(`Huzzah! you have overpaid for your item dispensing item & ${someChange} cents`);
            return true;
        }
    };
    howMuchIOweU(){
    if (this.cashTendered<this.amountDue){
        this.amountDue -= this.cashTendered;
        return this.amountDue;  // modifies this.amountDue for coins inserted
        }
    // else if (this.cashTendered>=this.amountDue){
    //     this.amountDue = 0;
    //     return this.amountDue;  // you owe nothing after paying or overpaying
    //     }  // interfered with oopsIOverPaid
    }
    oopsIOverpaid(){  // made this to set changeDue value when overpaying
        if (this.cashTendered>this.amountDue){
            this.changeDue = this.cashTendered-this.amountDue;
            return this.changeDue; 
        } // problem, howMuchIOweU resets amountDue...  going to comment that out of howMuchIOweU
    }
    giveChange() {
        if (this.isPaymentSufficient()===false){
            console.error("You betta give me mo money!"); return;
        }
        else{
            let changeReturn = {
                quarters: 0,
                dimes: 0,
                nickels: 0,
                pennies: 0
            }
            if (this.changeDue===0){
                console.warn("I owe you nothing! Select another item or be gone Mortal");
                return this.changeDue;
            }
            else if (this.changeDue%25===0){
                changeReturn.quarters = this.changeDue/25; // change due is divisible by 25, dispenses (changeReturn.quarters)# of quaters
            }
            else if (this.changeDue%25===1){
                changeReturn.quarters = math.floor(this.changeDue/25);
                this.changeDue -= (math.floor(this.changeDue/25)*25); // takes all the quarters out, remaining change<25
            }
            else if (this.changeDue%10===0){
                changeReturn.dimes = this.changeDue/10;
            }
            else if (this.changeDue%10===1){
                changeReturn.dimes = math.floor(this.changeDue/10);
                this.changeDue -= (math.floor(this.changeDue/10)*10); // change remaining < 10
            }
            else if (this.changeDue%5===0){
                changeReturn.nickles = this.changeDue/5;
            }
            else if (this.changeDue%5===1){
                changeReturn.nickles = math.floor(this.changeDue/5);
                this.changeDue -= (math.floor(this.changeDue/5)*5);
            }
            else { // pennies is all thats left
                changeReturn.pennies = this.changeDue;
            };
            return changeReturn;  // return the object with modified denomination counts.    
        }
    };
};
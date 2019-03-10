 let type, coin, change, cashTendered, quarters, dimes, nickels, pennies, someChange;
let moneyArray = [];
let changeReturn ={};
class ChangeHandler {

    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
        this.changeDue = 0;
        this.changeReturn = changeReturn;  // should be undefined until giveChange() is run.
        }

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

    isPaymentSufficient() { // false if you haven't paid enough, true if you have
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
            changeReturn = {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
            }
            if (this.changeDue===0){
                console.warn("I owe you nothing! Select another item or be gone Mortal");
                return changeReturn;
            }
            else {
                moneyArray[0] = this.changeDue;  // sets 1st item of money array to changeDue
                quarters = Math.floor(moneyArray[0]/25); // # of quarters
                moneyArray[1] = quarters; // sets 2nd item to # of quarters
                moneyArray[0] -= Math.floor(moneyArray[0]/25)*25; // reduces amount of change due in the array by value of #of quarters
                dimes = Math.floor(moneyArray[0]/10); //# of dimes
                moneyArray[2] = dimes; // puts dimes into moneyArray
                moneyArray[0] -= Math.floor(moneyArray[0]/10)*10; // re-evaluates change due sans dimes
                nickels = Math.floor(moneyArray[0]/5);  // # of nickels
                moneyArray[3] = nickels; // adds nickels to moneyArray
                moneyArray[0] -= Math.floor(moneyArray[0]/5)*5; // re-evaluates change due sans nickels
                // now moneyArray[0] = #pennies left to dispense
                // now moneyArray = [#pennies, #Quarters, #Dimes, #Nickels] - time to assign them to the changeReturn object
                console.log(`pennies, quarters, dimes, nickels || ${moneyArray}`)
                changeReturn.quarters = moneyArray[1];
                changeReturn.dimes = moneyArray[2];
                changeReturn.nickels = moneyArray[3];
                changeReturn.pennies = moneyArray[0];
                console.log({changeReturn})  // looks good
                return changeReturn;
            }
        }
    }
    debtReset(){  // this will run after change has been given back to zero out the amountDue
        this.amountDue = 0;
        return this.amountDue;
    }
};


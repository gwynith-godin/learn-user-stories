interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

/**
 * this class represents a simple bank with the ability to create new accounts 
 */

export default class Bank{
    // Array to store all bank accounts in the bank 
    private accounts: BankAccount[] = [];

    /**
     * Method to find a bank account in the bank
     * @param {string} accountNumber Account number of the bank account to find
     * @returns Bank account if found, undefined otherwise
     */
    private findAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }

    /**
     * creates a new account with a unique account number
     * @param name -- name of the customer
     * @param age -- age of the customer
     * @param accountNumber -- account number of the customer
     * @returns BankAccount -- the created account
     */

    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccExists = this.findAccount(accountNumber);
        if(isAccExists) {
            throw new Error("Account already exists");
        }
        const account: BankAccount = {
            name,
            age,
            accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        return account;
    }

    /**
     * Method to deposit money into a bank account
     * @param {number} amount -- amount of money to deposit
     * @param {string} accountNumber -- account number of the customer
     */
    public depositMoney(amount: number, accountNumber: string): void {
        // check if the account exists
        const bankAccount = this.findAccount(accountNumber);
        if(!bankAccount) {
            // if the account does not exist, throw an error
            throw new Error("Account already exists");
        }

        // check if the amount exceeds the deposit limit
        if(amount > 10_000){
            throw new Error("You have exceeded the deposit limit of 10k");
        }

        // add the money to the balance
        bankAccount.balance += amount;
    }
    
}
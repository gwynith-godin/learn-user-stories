import Bank from "../src/bank";

//setup
const bank = new Bank();

// Create Bank Account Tests
//scenario 1
console.log("\nCreate Bank Account Tests:")
const account = bank.createAccount("John Doe", 29, "2938298");
if(account.accountNumber === "2938298") {
    console.log("Scenario 1 passed");
}
else {
    console.log("Scenario 1 failed");
}

//scenario 2
try {
    bank.createAccount("John Doe", 29, "2938298");
    console.log("Scenario 2 failed");
}
catch(_) {
    console.log("Scenario 2 passed");
}

// Deposit Money
console.log("\nDeposit Money Tests:")
//scenario 1
bank.depositMoney(500.73, "2938298");
if(account.balance === 500.73) {
    console.log("Scenario 1 passed");
}
else {
    console.log("Scenario 1 failed");
}

//scenario 2
try {
    bank.depositMoney(500.73, "2938297");
    console.log("Scenario 2 failed");
}
catch(_) {
    console.log("Scenario 2 passed");
}

//scenario 3
try {
    bank.depositMoney(10_001, "2938298");
    console.log("Scenario 3 failed");
}
catch(_) {
    console.log("Scenario 3 passed");
}

//Withdraw Money
console.log("\nWithdraw Money Tests:")
//scenario 1
bank.withdrawMoney(300.73, "2938298");
if(account.balance === 200.00) {
    console.log("Scenario 1 passed");
}
else {
    console.log("Scenario 1 failed");
}

//scenario 2
try {
    bank.withdrawMoney(300.73, "2938299");
    console.log("Scenario 2 failed");
}
catch(_) {
    console.log("Scenario 2 passed");
}

//scenario 3
try {
    bank.withdrawMoney(200.75, "2938298");
    console.log("Scenario 3 failed");
}
catch(_) {
    console.log("Scenario 3 passed");
}

// second check to see if the balance remained the same
if(account.balance === 200.00) {
    console.log("Scenario 3 passed");
}
else {
    console.log("Scenario 3 failed");
}

//scenario 4

// add some money to create sufficient funds
bank.depositMoney(6_000.00, "2938298");

try {
    bank.withdrawMoney(5_001.00, "2938298");
    console.log("Scenario 4 failed");
}
catch(_) {
    console.log("Scenario 4 passed");
}
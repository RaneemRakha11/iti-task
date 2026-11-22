import { MathUtils } from "./mathUtils.js";
import config from "./config.js";
const user = {
  id: 1,
  name: "Sara",
  address: { city: "Cairo", zip: "12345" },
};
const nums = [10, 20, 30, 40];

let x = 1,
  y = 2;
[x, y] = [y, x];
console.log("swap ->", x, y); 

const { name: userName, role = "guest" } = user;
console.log("userName, role ->", userName, role); 

const {
  address: { city },
} = user;
console.log("city ->", city); 

const [first, , ...rest] = nums;
console.log("first, rest ->", first, rest);

function printUser({ name, address: { city } } = {}) {
  console.log(`${name} from ${city}`);
}
printUser(user); 
//p2 
class BankAccount {
  #balance;

  constructor(owner, balance = 0) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount < 0) throw new Error("Deposit amount can't be negative");
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error("Insufficient funds");
    this.#balance -= amount;
  }

  get balance() {
    return this.#balance;
  }
}

const account = new BankAccount("Ahmed", 1000);
account.deposit(500);
account.withdraw(200);
console.log("account.balance ->", account.balance);

// p3
class SavingsAccount extends BankAccount {
  constructor(owner, balance = 0, interestRate = 0.05) {
    super(owner, balance); 
    this.interestRate = interestRate;
  }

  addInterest() {
    this.deposit(this.balance * this.interestRate);
  }
}

const savings = new SavingsAccount("Sara", 1000, 0.05);
savings.deposit(500); 
savings.addInterest(); 
console.log("savings.balance ->", savings.balance); 

// p5
console.log(`${config.appName} v${config.version}`);
console.log("MathUtils.square(6) ->", MathUtils.square(6));
console.log("MathUtils.cube(3) ->", MathUtils.cube(3));
console.log("MathUtils.isEven(7) ->", MathUtils.isEven(7));
console.log("MathUtils.PI ->", MathUtils.PI);


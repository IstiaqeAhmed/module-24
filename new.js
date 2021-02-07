class Person {
    constructor (firstName, lastName, salary){
        this.firstName = firstName
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Sakib', 20000);
console.log(heroPerson);
const friendlyPerson = new Person('Hero', 'takim', 20049)
console.log(friendlyPerson);

// same type er onekgulo object jodi thake tokhon class er bitor theke object gula ke banano jai
// class theke object banate hole 'new' keyword use kora hoy. jate shobgula object er behavior same thake
// prototypical inheritance ki? search in google
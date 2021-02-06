const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        console.log(this);
       this.salary = this.salary - amount;
       return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary:25000
}
const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Dalam',
    salary:25000
}
//normalPerson.chargeBill();
 const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
 heroChargeBill(2000);
 heroChargeBill(3000);
 console.log(heroPerson.salary);
 console.log(normalPerson.salary);
// Bind Method: return hishebe arekta function dibe
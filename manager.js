const {Employee} = require('./employee')

class Manager extends Employee {
  constructor(name, title, salary, bossman) {
    super(name, title, salary, bossman)
    this.employees = [];
  }
  bonus(multiplier){
    //looping employes to9 get bonus
    let totalESal = this.employees.reduce((acc, el) => {
      return acc += el.salary
    }, this.salary)
    return totalESal*=multiplier
  }
}
//calvin, susie, lily, clifford
let hobbes = new Manager('Hobbes', 'Founder', 1000000, null)
let calvin = new Manager('Calvin', 'Director', 130000)
let susie = new Manager('Susie', 'TA Manager', 100000,	calvin)
let lily = new Employee('Lily', 'TA', 90000, susie)
let clifford = new Employee('Clifford', 'TA', 90000, susie)

hobbes.employees = [calvin, susie, lily, clifford]
calvin.employees = [susie, lily, clifford]
susie.employees = [lily, clifford]
// console.log(hobbes.employees)

console.log(hobbes.bonus(0.05)); // 70500
console.log(calvin.bonus(0.05)); // 20500
console.log(susie.bonus(0.05)); // 14000
console.log(lily.bonus(0.05)); // 4500
console.log(clifford.bonus(0.05)); // 4500
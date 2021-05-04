const {Employee} = require('./employee')

class Manager extends Employee {
  constructor(name, title, salary, ...employees) {
    super(name, title, salary)
    this.employees = employees
  }
  bonus(multiplier){
    //looping employes to9 get bonus
    let totalESal = this.employee.reduce((acc, el) => {
      return acc + el.salary
    })
    return totalESal*=multiplier
  }
}


console.log(hobbes.bonus(0.05)); // 70500
console.log(calvin.bonus(0.05)); // 20500
console.log(susie.bonus(0.05)); // 14000
console.log(lily.bonus(0.05)); // 4500
console.log(clifford.bonus(0.05)); // 4500
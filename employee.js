

class Employee {
  constructor(name, title, salary, bossman) {
    this.name = name
    this.title = title
    this.salary = salary
    this.bossman =bossman
  }
  bonus(multiplier){
   return this.salary *= multiplier;
  }
}





module.exports = {
  Employee: Employee,
}
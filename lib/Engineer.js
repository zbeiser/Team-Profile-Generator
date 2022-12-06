const Employee = require('./Employee')

class Engineer extends Employee {
  constructor(name, id, email, officeNumber) {
    this.officeNumber = officeNumber;

    super(name, id, email);
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Engineer;
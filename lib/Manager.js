// imports Employee constructor
const Employee = require("./Employee");

// manager constructor
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  // overrides employee role to manager
  getRole() {
    return "Manager";
  }
}

// to be exported
module.exports = Manager;

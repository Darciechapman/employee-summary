// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(fullName, id, email, school) {
        super(fullName, id, email);
        this.Inschool = school
    }

    getSchool() {
        return this.Inschool;
    }

    getRole() {
        return "Intern" ;
    }
}

module.exports = Intern
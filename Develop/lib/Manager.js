// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(fullName, id, email, officeNumber) {
        super(fullName, id, email);
        this.officeNo = officeNumber;
    }

    //getOfficeNumber() {
    //    return this.officeNo;
    //}

    getRole() {
        return "Manager" ;
    }
}

module.exports = Manager;
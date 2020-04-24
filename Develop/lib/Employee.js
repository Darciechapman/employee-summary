// TODO: Write code to define and export the Employee class

class Employee {
    constructor(fullName, id, email) {
        this.name = fullName;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

const person = new Employee("Halyna", 1, "me@mail");
console.log(person);

module.exports = Employee;

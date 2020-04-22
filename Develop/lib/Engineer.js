// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(githubName) {
        this.Gitname = githubName;
    }

    getGithub() {
        return this.Gitname;
    }

    getRole() {
        return "Engineer" ;
    }
}

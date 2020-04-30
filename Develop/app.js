const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const members = [];
const id = [];

function appMenu() {

function createManager() {
    console.log("Make your team")
    inquirer
    .prompt([
    {
        type: "input",
        name: "managerName",
        message: "what is the manager's name?",
        validate: answer => {
            if (answer !== "") {
                return true;
            } else {
                return "error";
            }
        }
    },
    {
        type: "number",
        name: "managerId",
        message: "what is the manager's ID?",
        validate: answer => {
            if (answer !== "") {
                return true;
            } else {
                return "error";
            }
        }
    },
    {
        type: "input",
        name: "managerEmail",
        message: "what is the manager's email",
        validate: answer => {
            if (answer !== "") {
                return true;
            } else {
                return "error";
            }
        }
    },
    {
        type: "number",
        name: "managerOfficeNumber",
        message: "what is the manager's office number",
        validate: answer => {
            if (answer !== "") {
                return true;
            } else {
                return "error";
            }
        }
    },
]).then(result => {
    const manager = new Manager(result.managerName, result.managerId, result.managerEmail, result.managerOfficeNumber);
    members.push(manager);
    id.push(result.managerId);
    createTeam();
    });
}

function createTeam() {

    inquirer.prompt([
    {
        type: "list",
        name: "memberRole",
        message: "What role would you like the next team member?",
        choices: [
            "Engineer", 
            "Intern",
            "My team is full"
        ]
    }
    ]).then(roleChoice => {
        switch(roleChoice.memberRole) {
            case "Engineer":
                makeEngineer();
                break;
            case "Intern":
                makeIntern();
                break;
            default:
                makeTeam();
        }
    })
}
        
function makeEngineer() {
    inquirer.prompt([
    {
        type: "input",
        name: "engineerName",
        message: "what is the engineer's name?",
        validate: answer => {
            if (answer !== "") {
                return true;
            } else {
                return "error";
            }
        }
    },
    {
        type: "number",
        name: "engineerId",
        message: "what is the engineer's ID?",
        validate: answer => {
            if (answer !== "") {
                return true;
            } else {
                return "error";
            }
        }
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "what is the engineer's email",
        validate: answer => {
            if (answer !== "") {
                return true;
            } else {
                return "error";
            }
        }
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "what is the engineer's Github username",
        validate: answer => {
            if (answer !== "") {
                return true;
            } else {
                return "error";
            }
        }
    },
]).then(result => {
    const engineer = new Engineer(result.engineerName, result.engineerId, result.engineerEmail, result.engineerGithub);
    members.push(engineer);
    id.push(result.engineerId);
    createTeam();
  });
}

function makeIntern() {
    inquirer.prompt([
    {
        type: "input",
        name: "internName",
        message: "what is the intern's name?",
        validate: answer => {
                if (answer !== "") {
                return true;
            } else {
                return "error";
            }
        }
    },
    {
        type: "number",
        name: "internId",
        message: "what is the intern's ID?",
        validate: answer => {
            if (answer !== "") {
                    return true;
            } else {
                return "error";
            }
        }
    },
    {
        type: "input",
        name: "internEmail",
        message: "what is the intern's email",
        validate: answer => {
            if (answer !== "") {
                return true;
            } else {
                return "error";
            }
        }
    },
    {
        type: "input",
        name: "internSchool",
        message: "what school does the intern attend",
        validate: answer => {
            if (answer !== "") {
            return true;
            } else {
                return "error";
            }
        }
    },
]).then(result => {
    const intern = new Intern(result.internName, result.internId, result.internEmail, result.internSchool);
    members.push(intern);
    id.push(result.internId);
    createTeam();
});
}

function makeTeam() {

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
      }
      fs.writeFileSync(outputPath, render(members), "utf-8");
}

          
createManager();

}

appMenu();
              
              

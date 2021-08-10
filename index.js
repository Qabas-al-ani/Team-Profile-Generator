// using html require
const generateHTML = require("./src/generateHTML");

// require for the whole team
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// set up the libraries needed
const fs = require("fs");
const inquirer = require("inquirer");

// create team array for later use
const teamArray = [];

// set up the manager dependencies
const addManagerElement = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "please provide the manager's name?",
        validate: (name) => {
          if (name) {
            return true;
          }
          console.log("Please provide the manager's name?");
          return false;
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please provide the manager's ID!",
        validate: (idInput) => {
          if (isNaN(idInput)) {
            console.log("Please provide the manager's ID!");
            return false;
          }
          return true;
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please can you enter the manager's email",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          }
          console.log("Please re correct the email!");
          return false;
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please write manager's office number",
        validate: (officeNumber) => {
          if (isNaN(officeNumber)) {
            console.log("Please write manager's office number!");
            return false;
          }
          return true;
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
    });
};

// creating adding employees
const addEmployeeEL = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please pick your employee's role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What's your employee's name?",
        validate: (name) => {
          if (name) {
            return true;
          }
          console.log("What's your employee's name?!");
          return false;
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please provide the employee's ID.",
        validate: (idInput) => {
          if (isNaN(idInput)) {
            console.log("Please provide the employee's ID!");
            return false;
          }
          return true;
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please write down the employee's email.",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          }
          console.log("Please write down the employee's email!");
          return false;
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the employee's github username account.",
        validate: (github) => {
          if (github) {
            return true;
          }
          console.log("Please enter the employee's github username!");
          return false;
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's school name.",
        validate: (schoolName) => {
          if (schoolName) {
            return true;
          }
          console.log("Please enter the intern's school name!");
          return false;
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message:
          "if you want to add more team members to your list, please enter?",
        default: false,
      },
    ])
    .then((employeeData) => {
      // data for employee types

      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
      }

      teamArray.push(employee);

      if (confirmAddEmployee) {
        return addEmployeeEL(teamArray);
      } else {
        return teamArray;
      }
    });
};

// function get the html down with the date in them
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    // if there is an error
    if (err) {
      console.log(err);
      return;
      // when the profile has been created, the team leader get this message
    } else {
      console.log(
        "Your team profile has been successfully created! Please check out the index.html"
      );
    }
  });
};

addManagerElement()
  .then(addEmployeeEL)
  .then((teamArray) => {
    return generateHTML(teamArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });

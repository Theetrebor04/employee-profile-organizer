const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/employee");

function startingPrompt() {
    inquirer.prompt([
        {
            message: "Welcome to Employee Generator! What is your team name?",
            name: "teamname"
        }
    ])

        .then(function(data) {
            const teamName = data.teamName
            addManager();
        })
}

function addManager() {
    inquirer.prompt([
        {
            message: "What is your Manager's name?",
            name: "name"
        },
        {
            message: "What is your manager's email address?",
            name: "email"
        },
        {
            type: "number",
            message: "What is your Manager's office number?",
            name: "officeNumber"
        },
    ])

        .then(function(data) {
            const name = data.name
            const id = 1 
            const email = data.email
            const officeNumber = data.officeNumber
            const addTeamMember = new Manager(name, id, email, officNumber)
            finalTeamArray.push(teamMember)
            addTeamMembers();
        });

}

function addEngineer() {
    inquirer.prompt([
        {
            message: "What is this Engineer's name?",
            name: "name"
        },
        {
            message: "What is this engineer's email address?",
            name: "email"
        },
        {
            message: "What is this Engineer's Github profile?",
            name: "github"
        }
    ])

        .then(function() {
            const name = data.name
            const id = finalTeamArray.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            finalTeamArray.push(teamMember)
            addTeamMembers();
    });
}

function addIntern() {
    inquirer.prompt([
        {
            message: "What is this Intern's name?",
            name: "name"
        },
        {
            message: "What is this Intern's email address?",
            name: "email"
        },
        {
            message: "What is this Intern's school?",
            name: "school"
        }
    ])

        .then(function() {
            const name = data.name
            const id = finalTeamArray.length + 1 
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            finalTeamArray.push(teamMember)
            addTeamMembers();
    });
}

function addEmployee() {
    inquirer.prompt([
        {
            message: "What is this Employee's name?",
            name: "name"
        },
        {
            message: "What is this Employee's email?",
            name: "email"
        },
    ])

        .then(function() {
            const name = data.name
            const id = finalTeamArray.length + 1
            const email = data.email
            const teamMember = new Employee(name, id, email)
            finalTeamArray.push(teamMember)
            addTeamMembers();
    });
}

function addTeamMembers () {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Yes, add an Engineer", "Yes, add an Intern", "Yes, add an Employee", "No my team is complete"],
            name: "addMemberData"
        }
    ])

        .then(function (data) {

            switch (data.addMemberData) {
                case "Yes, add an Engineer":
                    addEngineer();
                    break;

                case "Yes, add an Intern":
                    addIntern();
                    break;

                case "Yes, add an Employee":
                    addEmployee();
                    break;
            }
        })
}

startingPrompt()
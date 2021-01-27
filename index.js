const inquirer = require("inquirer");
const fs = require("fs");

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

        .then(function() {
            addTeamMembers();
        })

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
        addTeamMembers();
    })
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
        addTeamMembers();
    })
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
        addTeamMembers();
    })
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
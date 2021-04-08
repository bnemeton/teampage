//requires
const inq = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generateHTML = require('./src/generateHTML');

//questions arrays
const managerQ = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team manager?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the ID of the manager?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email?'
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is their office number?'
    }
]

const select = [
    {
        type: 'list',
        name: 'role',
        message: 'Which type of employee are you entering?',
        choices: [
            'engineer',
            'intern',
            'no more employees'
        ]
    }
]

const engineerQ = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the engineer?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is their Github username?'
    }
]

const internQ = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the intern?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the name of their school?'
    }
]

//init/inquirer

var team = {
    manager: null,
    engineers: [],
    interns: [],
}

const addEngineer = function() {
    inq
        .prompt(engineerQ)
        .then ((data) => {
            let { name, id, email, github } = data;
            const engineer = new Engineer(name, id, email, github);
            team.engineers.push(engineer);
            getEmployee();
        })

}

const addIntern = function() {
    inq
        .prompt(internQ)
        .then ((data) => {
            let { name, id, email, school } = data;
            const intern = new Intern(name, id, email, school);
            team.interns.push(intern);
            getEmployee();
        })
}

const wrapUp = function (team) {
    console.log(team)
    const page = generateHTML(team);
    fs.writeFile("./output/index.html", page, err => console.log(err))
}



let getEmployee = () => {
    inq.prompt(select).then((data) => {
        if (data.role === "engineer") {
            addEngineer();
        } else if (data.role === "intern") {
            addIntern();     
        } else {
            wrapUp(team);
        }}
    )};

let getTeam = () => {
    inq.prompt(managerQ).then((data) => {
        let { name, id, email, office } = data;
        let manager = new Manager(name, id, email, office);
        team.manager = manager;
        getEmployee();
    })
    
}

getTeam();
  
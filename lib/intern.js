const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);

        this.school = school;
    }
}

Intern.prototype.getSchool = function() {
    return this.school;
}

Intern.prototype.getRole = function() {
    return "Intern";
}

Intern.prototype.printCard = function() {
    return `
    <div class=' card intern'>
    <div class='card-header'>
    <div class='card-header-title'>${this.name}</div>
    </div>
    <div class='card-body'>
    <ul>
    <li>role: intern</li>
    <li>id: ${this.id}</li>
    <li>email: <a href = "mailto: ${this.email}">${this.email}</a></li>
    <li>school: ${this.school}</li>
    </ul>
    </div>
    </div>
    `
}

module.exports = Intern;
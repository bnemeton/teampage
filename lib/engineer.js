const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
}

Engineer.prototype.getGithub = function() {
    return this.github;
}

Engineer.prototype.getRole = function() {
    return "Engineer";
}

Engineer.prototype.printCard = function() {
    return `
    <div class=' card engineer'>
    <div class='card-header'>
    <div class='card-header-title'>${this.name}</div>
    </div>
    <div class='card-body'>
    <ul>
    <li>role: engineer</li>
    <li>id: ${this.id}</li>
    <li>email: <a href = "mailto: ${this.email}">${this.email}</a></li>
    <li>github: <a href="https://github.com/${this.github}">${this.github}</a></li>
    </ul>
    </div>
    </div>
    `
}
module.exports = Engineer;
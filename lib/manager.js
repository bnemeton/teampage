const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email)
        this.officeNumber = officeNumber;
    }
}

Manager.prototype.getOffice = function() {
    return this.officeNumber;
}

Manager.prototype.getRole = function() {
    return "Manager";
}


Manager.prototype.printCard = function() {
    return `
    <div class='card manager'>
    <div class='card-header'>
    <div class='card-header-title'>${this.name}</div>
    </div>
    <div class='card-body'>
    <ul>
    <li>role: manager</li>
    <li>id: ${this.id}</li>
    <li>email: <a href = "mailto: ${this.email}">${this.email}</a></li>
    <li>office: ${this.officeNumber}</li>
    </ul>
    </div>
    </div>
    `
}

module.exports = Manager;

const Manager = require("../lib/Manager")

test("Can set office number", () => {
    const officeNumber = "456";
    const man = new Manager("whatever", 123, "address@host", officeNumber);
    expect(man.officeNumber).toBe(officeNumber);
})

test("Can get officeNumber with getOffice()", () => {
    const officeNumber = "456";
    const man = new Manager("whatever", 123, "address@host", officeNumber);
    expect(man.getOffice()).toBe(officeNumber);
})

test("Check role with getRole()", () => {
    const role = "Manager";
    const man = new Manager();
    expect(man.getRole()).toBe(role);
})
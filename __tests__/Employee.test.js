
const Employee = require("../lib/Employee")

test("Can make an employee", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test("Can set name", () => {
    const name = "Brigid";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
})

test("Can set ID", () => {
    const id = "123";
    const emp = new Employee("whatever", id);
    expect(emp.id).toBe(id);
})

test("Can set email", () => {
    const email = "address@host";
    const emp = new Employee("whatever", 123, email);
    expect(emp.email).toBe(email);
})

test("Can get name with getName()", () => {
    const name = "Brigid";
    const emp = new Employee(name);
    expect(emp.getName()).toBe(name);
})

test("Can get id with getId()", () => {
    const id = 123;
    const emp = new Employee("whatever", id);
    expect(emp.getId()).toBe(id);
})

test("Can get email with getEmail()", () => {
    const email = "address@host";
    const emp = new Employee("whatever", 123, email);
    expect(emp.getEmail()).toBe(email);
})

test("Check role with getRole()", () => {
    const role = "Employee";
    const emp = new Employee("whatever", 123, "address@host");
    expect(emp.getRole()).toBe(role);
})
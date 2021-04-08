
const Intern = require("../lib/Intern")

test("Can set school", () => {
    const school = "Reed College";
    const int = new Intern("whatever", 123, "address@host", school);
    expect(int.school).toBe(school);
})

test("Can get school with getSchool()", () => {
    const school = "Reed College";
    const int = new Intern("whatever", 123, "address@host", school);
    expect(int.getSchool()).toBe(school);
})

test("Check role with getRole()", () => {
    const role = "Intern";
    const int = new Intern();
    expect(int.getRole()).toBe(role);
})
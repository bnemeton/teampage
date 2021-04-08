
const Engineer = require("../lib/Engineer")

test("Can set github", () => {
    const github = "username";
    const eng = new Engineer("whatever", 123, "address@host", github);
    expect(eng.github).toBe(github);
})

test("Can get github with getGithub()", () => {
    const github = "username";
    const eng = new Engineer("whatever", 123, "address@host", github);
    expect(eng.getGithub()).toBe(github);
})

test("Check role with getRole()", () => {
    const role = "Engineer";
    const eng = new Engineer();
    expect(eng.getRole()).toBe(role);
})
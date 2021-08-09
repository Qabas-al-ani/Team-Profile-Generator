// Manager constructor
const Manager = require("../lib/Manager");

describe("Manager class", () => {
  // creates manager object
  it("creates an Manager object", () => {
    const name = "Qabas";
    const id = 1981;
    const email = "QabasDeveloper@gmail.com";
    const number = 99;

    const Manager = new Manager(name, id, email, number);

    expect(manager.officeNumber).toEqual(number);
  });

  // gets role from getRole method
  it("gets role of employee", () => {
    const name = "Qabas";
    const id = 1981;
    const email = "QabasDeveloper@gmail.com";
    const number = 99;

    const Manager = new Manager(name, id, email, number);

    expect(manager.getRole()).toEqual("Manager");
  });
});

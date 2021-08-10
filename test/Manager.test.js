// Manager requirer
const Manager = require("../lib/Manager");

describe("Manager class", () => {
  it("creates an Manager object", () => {
    const name = "Qabas";
    const id = 1981;
    const email = "QabasDeveloper@gmail.com";
    const officeNumber = 99;

    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.officeNumber).toEqual(officeNumber);
  });

  // gets role from getRole method
  it("gets role of employee", () => {
    const name = "Qabas";
    const id = 1981;
    const email = "QabasDeveloper@gmail.com";
    const officeNumber = 99;

    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.getRole()).toEqual("Manager");
  });
});

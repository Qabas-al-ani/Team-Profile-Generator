// using Employee require
const Employee = require("../lib/Employee");

describe("Employee class", () => {
  // creates employee object
  it("creates an employee object", () => {
    const name = "Qabas";
    const id = 1981;
    const email = "QabasDeveloper@gmail.com";

    const employee = new Employee(name, id, email);

    expect(employee.name).toEqual(name);
    expect(employee.id).toEqual(id);
    expect(employee.email).toEqual(email);
  });
  // get name from getName method
  it("gets employee name", () => {
    const name = "Qabas";
    const id = 1981;
    const email = "QabasDeveloper@gmail.com";

    const employee = new Employee(name, id, email);

    expect(employee.getName()).toEqual(name);
  });

  // gets id from getId method
  it("gets employee ID", () => {
    const name = "Qabas";
    const id = 1981;
    const email = "QabasDeveloper@gmail.com";

    const employee = new Employee(name, id, email);

    expect(employee.getId()).toEqual(id);
  });

  // checks email if it's right
  it("gets employee email", () => {
    const name = "Qabas";
    const id = 1981;
    const email = "QabasDeveloper@gmail.com";

    const employee = new Employee(name, id, email);

    expect(employee.getEmail()).toEqual(email);
  });

  // checks if get role returns employee 
  it("gets role of employee", () => {
    const name = "Qabas";
    const id = 1981;
    const email = "QabasDeveloper@gmail.com";

    const employee = new Employee(name, id, email);

    expect(employee.getRole()).toEqual("Employee");
  });
});

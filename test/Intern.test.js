// using Intern constructor 
const Intern = require('../lib/Intern');


describe("Intern class", () => {
// creating intern object  
it('creates an Intern object', () => {
    const name = "Qabas";
    const id = 1981;
    const email = "QabasDeveloper@gmail.com";
    const school = "unc-chapel hill"


    const engineer = new Engineer(name, id, email, school);
    
    expect(intern.school) .toEqual(school);
});

// gets school from getSchool()
it('gets employee school', () => {
    const name = "Qabas";
    const id = 1981;
    const email = "QabasDeveloper@gmail.com";
    const school = "unc-chapel hill"


    const engineer = new Engineer(name, id, email, school);
    
    expect(intern.getSchool()).toEqual(school);
});

// gets role from getRole()
it('gets role of employee', () => {
    const name = "Qabas";
    const id = 1981;
    const email = "QabasDeveloper@gmail.com";
    const school = "unc-chapel hill"


    const engineer = new Engineer(name, id, email, school);

    expect(intern.getRole()).toEqual("Intern");
}); 
})
// using Intern require
const Intern = require('../lib/Intern');


describe("Intern class", () => { 
it('creates an Intern object', () => {
    const name = "Qabas";
    const id = 1981;
    const email = "QabasDeveloper@gmail.com";
    const school = "unc-chapel hill"


    const intern = new Intern(name, id, email, school);
    
    expect(intern.school) .toEqual(school);
});

// checks if the intern has been in school 
it('gets employee school', () => {
    const name = "Qabas";
    const id = 1981;
    const email = "QabasDeveloper@gmail.com";
    const school = "unc-chapel hill"


    const intern = new Intern(name, id, email, school);
    
    expect(intern.getSchool()).toEqual(school);
});

// checks if the intern has been in role
it('gets role of employee', () => {
    const name = "Qabas";
    const id = 1981;
    const email = "QabasDeveloper@gmail.com";
    const school = "unc-chapel hill"


    const intern = new Intern(name, id, email, school);

    expect(intern.getRole()).toEqual("Intern");
}); 
})
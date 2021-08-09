// using Engineer constructor 
const Engineer = require('../lib/Engineer');

describe("Employee class", () => {
// creating engineer object  
it('creates an Engineer object', () => {
    const name = "Qabas";
    const id = 1981;
    const email = "QabasDeveloper@gmail.com";
    const github = 'Qabas-al-ani'


    const engineer = new Engineer(name, id, email, github);
    
    expect(engineer.github) .toEqual(github);
});

// gets github from getGithub()
it('gets engineer github value', () => {
    const name = "Qabas";
    const id = 1981;
    const email = "QabasDeveloper@gmail.com";
    const github = 'Qabas-al-ani'


    const engineer = new Engineer(name, id, email, github);;

    expect(engineer.getGithub()).toEqual(github);
});

// gets role from getRole() 
it('gets role of employee', () => {
    const name = "Qabas";
    const id = 1981;
    const email = "QabasDeveloper@gmail.com";
    const github = 'Qabas-al-ani'


    const engineer = new Engineer(name, id, email, github);

    expect(engineer.getRole()).toEqual("Engineer");
});
})
//  create employee constructor 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // return a name from input
    getName () {
        return this.name;
    }

    // return an ID from input
    getId () {
        return this.id;
    }   

    // return an email from input
    getEmail () {
        return this.email;
    }

    // return an employee type 
    getRole () {
        return 'Employee'; 
    }
};

// to be exported 
module.exports = Employee; 

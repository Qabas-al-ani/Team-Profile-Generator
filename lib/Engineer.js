// importing Employee constructor 
const Employee = require("./Employee");

// Engineer constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
    
        // calling employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    // getting github from input 
    getGithub () {
        return this.github;
    }

     // Adding employee role to engineer
    getRole () {
        return "Engineer";
    }
}

// to be exported 
module.exports = Engineer; 
// create Manager card
let generateManagerCard = (manager) => {
  return `
    <div class="col-lg-4 col-md-5">
    <div class="card customCard mt-5 bg-dark bg-gradient text-white"  >
  
      <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
        <h6> <span class="material-icons">
            manage_accounts
            </span> Manager</h6>
         <ul class="list-group list-group-flush">
            <li class="list-group-item">ID : ${manager.id}</li>
            <li class="list-group-item">Email : <a href = "mailto: ${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office Number : ${manager.officeNumber} </li>
          </ul>
        </div>
    </div>
  </div> 

    `;
};

// create Engineer card
let generateEngineerCard = (engineer) => {
  return `
    <div class="col-lg-4 col-md-5">
    <div class="card customCard mt-5 bg-dark bg-gradient text-white"  >
  
      <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>

        <h6> <span class="material-icons">
            engineering
            </span> Engineer</h6>
         <ul class="list-group list-group-flush">
            <li class="list-group-item">ID : ${engineer.id}</li>
            <li class="list-group-item">Email : <a href = "mailto: ${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">Github : <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
          </ul>
        </div>
    </div>
  </div> 
    `;
};

// create Intern card
let generateInternCard = (intern) => {
  return `
    <div class="col-lg-4 col-md-5">
            <div class="card customCard mt-5 bg-dark bg-gradient text-white"  >
          
              <div class="card-body">
                <h5 class="card-title">${intern.name}</h5>
        
                <h6> <span class="material-icons">
                    school
                    </span> Intern</h6>
                 <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID : ${intern.id}</li>
                    <li class="list-group-item">Email : <a href = "mailto: ${intern.email}">${intern.email}</a></li>
                    <li class="list-group-item">School : ${intern.school}</li>
                  </ul>
                </div>
            </div>
          </div> 
  
    `;
};

// push array to page
generateHTML = (data) => {
  // array for cards
  pageArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // call manager function
    if (role === "Manager") {
      const managerCard = generateManagerCard(employee);

      pageArray.push(managerCard);
    }

    // call engineer function
    if (role === "Engineer") {
      const engineerCard = generateEngineerCard(employee);

      pageArray.push(engineerCard);
    }

    // call intern function
    if (role === "Intern") {
      const internCard = generateInternCard(employee);

      pageArray.push(internCard);
    }
  }

  // joining strings
  const employeeCards = pageArray.join("");

  // return to generated page
  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};

// generate html page
const generateTeamPage = function (employeeCards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"
      ></script>
      <link rel="shortcut icon" href="./images/favicon.png" type="image/png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap"
        rel="stylesheet"
      />
  <style>
      body {
    font-family: "Cinzel", serif;
    background-image: url('../images/bg.jpg');
    background-size: cover;
  }
  .customCard {
    opacity: 0.9;
  }
  
  h1 {
    text-shadow: 2px 2px black;
  }
  
  </style>
      <title>Weather Dashboard Api</title>
    </head>
    <body>
      
      <header class="text-center customCard text-white bg-dark bg-gradient p-2">
        <h1>My Team</h1>
      </header>
  
      <main class="row d-flex justify-content-around m-5" >
                  ${employeeCards}
                  </main>
        
                </body>
              </html>
`;
};

// export to index
module.exports = generateHTML;

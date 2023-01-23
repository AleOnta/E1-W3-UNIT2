// Constructor for the new user registered
const NewVisitor = function (firstname, lastname, date) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.birthdate = date;
};

function welcomeToTheTable() {
  let userfirstname = document.getElementById("firstname").value;
  let userLastname = document.getElementById("lastname").value;
  let birthdate = document.getElementById("birthDate").value;

  const registeredUser = new NewVisitor(userfirstname, userLastname, birthdate);
  // Recovering the name / surname / birthdate to push into the table
  const Fname = registeredUser.firstname;
  const Lname = registeredUser.lastname;
  const Bdate = registeredUser.birthdate;

  // creating the html structure for te table
  const myTable = document.getElementById("tableContainer");
  const NewUserRow = document.createElement("tr");
  const userFname = document.createElement("td");
  userFname.innerText = Fname;
  const userLname = document.createElement("td");
  userLname.innerText = Lname;
  const userBdate = document.createElement("td");
  userBdate.innerText = Bdate;

  // appending all new html elements to their respective father
  NewUserRow.append(userFname);
  NewUserRow.append(userLname);
  NewUserRow.append(userBdate);
  myTable.appendChild(NewUserRow);

  // clearing the input field for new command
  const toClearFirst = document.getElementById("firstname");
  const toClearSecond = document.getElementById("lastname");
  const toClearThird = document.getElementById("birthDate");
  toClearFirst.value = null;
  toClearSecond.value = null;
  toClearThird.value = null;
}

// calling the function on click
let registerCommand = document.getElementById("registerButton");
registerCommand.onclick = function () {
  welcomeToTheTable();
};

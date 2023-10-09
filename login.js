const getEmail = document.getElementById("femail");
const pass = document.getElementById("fpass");
const btn = document.getElementsByClassName("subtn");

let isclicked = true;

class Login{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    log() {
        console.log(this.email, "Has log in.")
    }
}

const newUser = new Login(getEmail, pass);

function click() {
    console.log(newUser);
}
click();

newUser.log();
const errMessageDiv = document.getElementById("error-message");

const emailElementInput = document.getElementById("email");

const pwdElementInput = document.getElementById("pwd");

const formElement = document.getElementById("form");

const loginDiv = document.getElementById("login");

loginDiv.addEventListener("submit", showerrMsg);

function showerrMsg(event){
event.preventDefault();

If( emailElementInput.value === "" );{

    errMessageDiv.classList.remove("hide")
}

}


console.log(pwdElementInput);

console.log("errMsg not working");

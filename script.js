const errMessage = document.getElementById("error-message");

const emailElementInput = document.getElementById("email");

const pwdElementInput = document.getElementById("pwd");

const formElement = document.getElementById("form");

const loginDiv = document.getElementById("login");

formElement.addEventListener("submit", showerrMsg);

function showerrMsg(event){
event.preventDefault();

if( emailElementInput.value === "" ){

    errMessage.classList.remove("hide")
}

}

console.log(emailElementInput);

console.log("errMsg not working");

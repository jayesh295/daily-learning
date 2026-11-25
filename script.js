let heading = document.getElementById("login");
let loginButton = document.getElementById("btn");
let data = document.getElementById("msg");

loginButton.addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;

    console.log("Name:",name);
    console.log("Password:",pass);
});
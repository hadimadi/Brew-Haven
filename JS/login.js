var inputEmail = document.getElementById("input-email");
var inputPassword = document.getElementById("input-pwd");
var submitBtn = document.getElementById("submitBtn");

var emailStorage =  localStorage.getItem("email");
var passwordStorage = localStorage.getItem("password");

submitBtn.addEventListener("click", function() {
    if(inputEmail.value === "" || inputPassword.value === "") {
        alert("Please fill in all the fields.");
    }

    else if(inputEmail.value !== emailStorage || inputPassword.value !== passwordStorage) {
        alert("Invalid email or password.");
    }

    else {
        alert("Login successful!");     
        setTimeout(function() {
            location = "index.html";
        }, 1000);
    }
})


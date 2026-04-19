var inputName = document.getElementById("input-name");
var inputEmail = document.getElementById("input-email");
var inputPassword = document.getElementById("input-pwd");
var inputConfirmPassword = document.getElementById("input-cpwd");
var submitBtn = document.getElementById("submitBtn");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


submitBtn.addEventListener("click" , function() {
    if(inputName.value === "" || inputEmail.value === "" || inputPassword.value === "" || inputConfirmPassword.value === "") {
        alert("Please fill in all the fields.");
    }

    else if(inputEmail.value !== "" && !emailPattern.test(inputEmail.value)) {
        alert("Invalid email format.");
    }
    
    else if(inputPassword.value.length < 8) {
        alert("Password must be at least 8 characters long.");
    }

    else if(inputPassword.value !== inputConfirmPassword.value) {
        alert("Passwords do not match.");
    }
    else {
        alert("Sign up successful!");
        localStorage.setItem("name", inputName.value);
        localStorage.setItem("email", inputEmail.value);
        localStorage.setItem("password", inputPassword.value);
        
        setTimeout(function() {
            window.location.href = "login.html";
        }, 1000);
    }
})



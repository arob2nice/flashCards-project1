document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the form
    document.getElementById('signUpForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form submission (so page doesn't reload)
    }); // Add this closing curly brace
}); // Add this closing curly brace

        // Get form data
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        

        // Create an object with the user data
        const userInfo = {
            email: email,
            password: password  // In a real app, don't store the password like this
        };

// Function to validate password and redirect
function validateLogin() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    loginButton.addEventListener('click', function () {
        userInfo.innerHTML = '';
    });  // Add closing parenthesis here

    // Check if the username and password match the correct credentials
    if (username === "email" && password === "password") {
        // Redirect to another page if the password is correct
        window.location.href = 'createDeckModal'; // Replace with your target page URL
    } else {
        // Show an error message if password is incorrect
        alert("Invalid username or password");
    }
}
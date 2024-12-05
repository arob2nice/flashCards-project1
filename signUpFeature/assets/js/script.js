// app.js

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the form
    document.getElementById('signUpForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form submission (so page doesn't reload)

        // Get form data
        const username = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Create an object with the user data
        const userInfo = {
            username: username,
            email: email,
            password: password  // In a real app, don't store the password like this
        };

        // Check if any of the fields are empty or not filled out  
        if (!username || !email || !password || !confirmPassword) {
            //alert('Please fill out all fields.');
            return;  // Prevent form submission and don't save to localStorage
        }

        // Check if password and confirm password match
        if (password !== confirmPassword) {
            //alert("Passwords do not match. Please try again.");
            return;  // Prevent form submission and don't save to localStorage
        }

        if (password === confirmPassword) {
            // Store the user data in localStorage
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        }

        if (localStorage.getItem('name')) {
            userInfo.innerHTML = `Name: ${localStorage.getItem('name')}<br>Email: ${localStorage.getItem('email')}`;
        }
        
        JSON.parse(localStorage.getItem('userInfo'));
        // Get the button element
        const signUpButton = document.getElementById('signUpButton');
        
        // Clear the stored data
        signUpButton.addEventListener('click', function () {
            localStorage.clear();
            userInfo.innerHTML = '';
        });
        
        if (password == confirmPassword) {
            window.location.href = './signUpFeature/login.html';
        }
    }
    );});









   











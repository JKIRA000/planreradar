// Update the signup script
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Password validation pattern
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate password
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long, include at least 1 uppercase letter, 1 number, and 1 special character.");
        return; // Stop form submission if password is invalid
    }

    // Store user data in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password); // Note: In real applications, don't store passwords in plain text!

    alert("Registration successful! Redirecting to login page.");
    window.location.href = "login.html"; // Redirect to the login page
});

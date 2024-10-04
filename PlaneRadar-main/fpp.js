document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;

    // Basic validation to simulate password reset request
    if (email) {
        alert("Password reset link has been sent to your email address.");
        // You would typically handle the password reset by sending the email through the server.
    } else {
        alert("Please enter a valid email address.");
    }
});

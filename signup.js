document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const errorMessage = document.getElementById('signupErrorMessage');

    if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid email.";
    } else if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters.";
    } else {
        // Save user data to localStorage (can be replaced with backend storage)
        const userData = { username, email, password };
        localStorage.setItem('user', JSON.stringify(userData));

        // Redirect to the sign-in page
        window.location.href = 'index.html';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


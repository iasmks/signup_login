document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
   

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;
        const password = document.getElementById('password').value;
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('mobile', mobile);
        localStorage.setItem('password', password);
        alert('Sign up successful! Please login.');

        // Reset the form
        signupForm.reset();
        
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        if (email === storedEmail && password === storedPassword) {
            alert('Login successful!');
            window.location.href = 'welcome.html'; // Redirect to welcome page
            localStorage.setItem('loginEmail', email);
            localStorage.setItem('loginPassword', password);
        } else {
            alert('Invalid username or password.');
        }
    });
});

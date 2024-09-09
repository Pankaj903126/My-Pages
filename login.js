const correctUsername = '1'; // Set your username here
const correctPassword = '2'; // Set your password here

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    if (username === correctUsername && password === correctPassword) {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
        
        // Redirect to another page after successful login
        window.location.href = 'index.html'; // Replace 'dashboard.html' with the page you want to redirect to
    } else {
        message.textContent = 'Invalid username or password.';
        message.style.color = 'red';
    }
});

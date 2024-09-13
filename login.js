document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');

            // Simple validation (you would typically do this on the server)
            if (username === '1' && password === '2') {
                errorMessage.textContent = '';
                errorMessage.style.opacity = 0;
                // Redirect to a new page (replace 'YOUR_REDIRECT_URL' with the actual URL)
                window.location.href = 'https://www.google.com';
            } else {
                errorMessage.textContent = 'Invalid username or password. Please try again.';
                errorMessage.style.opacity = 1;
            }
        });

        document.getElementById('forgot-password-link').addEventListener('click', function(e) {
            e.preventDefault();
            const forgotPasswordMessage = document.getElementById('forgot-password-message');
            forgotPasswordMessage.textContent = 'Hey! I am sorry you have to memorize the password. If you have no proper username and password then you can not access the resources. '; // Leave this blank for customization
            forgotPasswordMessage.style.opacity = 1;
        });

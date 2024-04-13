document.getElementById('Toggle').addEventListener('click', function() {
    var contentDiv = document.getElementById('hidden');
    if (contentDiv.style.display === 'none') {
        contentDiv.style.display = 'block';
    } else {
        contentDiv.style.display = 'none';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');
    
    if (username.trim() === '' || password.trim() === '') {
        errorMessage.textContent = 'Please fill out all fields.';
        errorMessage.style.display = 'block';
    } else {
        // Here you can proceed with form submission or other actions
        // For demonstration purposes, let's just log the username and password
        console.log('Username:', username);
        console.log('Password:', password);
        // Reset error message
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
    }
});
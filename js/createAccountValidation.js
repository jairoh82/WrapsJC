
function validateForm() {
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    // Validate login, password, and email fields
    if (login.trim() === '') {
        alert('Login field is required');
        return false;
    }

    if (password.trim() === '') {
        alert('Password field is required');
        return false;
    }

    if (email.trim() === '') {
        alert('Email field is required');
        return false;
    }

    // Optional fields validation (street, city, state, zip, phone)
    // Add your validation logic here

    return true;
}

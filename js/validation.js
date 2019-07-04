function checkSubmitButton(e) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phone_number').value;

    if (!name) {
        document.getElementById('errorMessage').innerHTML = 'Name is required';
        return;
    }

    if(email && !validateEmail(email)) {
        document.getElementById('errorMessage').innerHTML = 'Email is not valid!';
        return;
    }

    if(e.id === 'phone_number' && !phoneNumber) {
        document.getElementById('errorMessage').innerHTML = 'Phone number is required';
    }

    if ((name && email && phoneNumber) && (name.length > 0 && email.length > 0 && phoneNumber.length > 0)) {
        document.getElementById('errorMessage').innerHTML = '';
        document.getElementById('formButton').removeAttribute('disabled');
    } else {
        document.getElementById('formButton').setAttribute('disabled', true);
    }
};

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// refer to question 4 before development starts for scope document
document.getElementById('submitContact').addEventListener("click", validateForm);

const mailPat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const numPat = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
const namePattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;


function validateForm() {
    let phone = document.getElementById('phone').value;
    let phoneError = document.getElementById('phoneError');
    let mailTxt = document.getElementById('email').value;
    let emailError = document.getElementById('emailError');
    let firstName = document.getElementById('firstName').value;
    let firstNameError = document.getElementById('firstNameError');
    let lastName = document.getElementById('lastName').value;
    let lastNameError = document.getElementById('lastNameError');

// if else, to check if values are either true or false.


    if (!firstName || !namePattern.test(firstName)) {
        firstNameError.style = "display: block;"
        document.getElementById('firstName').style = "border-color: red;"
        console.log('Invalid First Name');
    } else {
        document.getElementById('firstName').style = "border-color: green;"
        firstNameError.style = "display: none;"
    };

    if (!lastName || !namePattern.test(lastName)) {
        lastNameError.style = "display: block;"
        document.getElementById('lastName').style = "border-color: red;"
        console.log('Invalid Last Name');
    } else {
        document.getElementById('lastName').style = "border-color: green;"
        lastNameError.style = "display: none;"
    };

    if (!phone || !numPat.test(phone)) {
        phoneError.style = "display: block;"
        document.getElementById('phone').style = "border-color: red;"
        console.log('Invalid Number');
    } else {
        document.getElementById('phone').style = "border-color: green;"
        phoneError.style = "display: none;"
    };

    if (!mailTxt || !mailPat.test(mailTxt)) {
        emailError.style = "display: block;"
        document.getElementById('email').style = "border-color: red;"
        console.log('Invalid mail addresse');

    } else {
        document.getElementById('email').style = "border-color: green;"
        emailError.style = "display: none;"
    };
};
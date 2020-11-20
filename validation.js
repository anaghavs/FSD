var passwd = document.getElementById("password");
var passwd2 = document.getElementById("password2");
var contact = document.getElementById("contact");

function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    if (passwd.value.length == 0) {
        strength.innerHTML = '<span style="color:blue">Type Password</span>';
    } else if (strongRegex.test(passwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
    } else if (mediumRegex.test(passwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
    }
}

function valid() {
    let regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    let regexpe = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (contact.value == '') {
        alert("Enter contact number");
        return false;
    } else if (false == (regexpe.test(contact.value))) {
        alert("contact number is not in correct format");
        return false;
    } else if (passwd.value == '') {
        alert("enter password");
        return false;
    } else if (passwd2.value == '') {
        alert("confirm password");
        return false;
    } else if (false == (passwd.value == passwd2.value)) {
        alert("passwords not match!");
        return false;
    } else if (regexp.test(passwd.value)) {
        return true;
    } else {
        alert("Password must contain at least one number and one uppercase and lowercase letter,and atleast 8 characters");
        return false;
    }
}
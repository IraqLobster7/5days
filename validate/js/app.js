function validate() {
    let name = document.querySelector('#name').value;
    let subject = document.querySelector('#subject').value;
    let phone = document.querySelector('#phone').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;
    let errorMessage = document.querySelector('#error_message');


    errorMessage.style.padding = "10px";

    let text;

    if (name.length < 3) {
        text = "Please Enter valid Name";
        errorMessage.innerHTML = text;
        return false;
    }
    if (subject.length < 10) {
        text = "Please Enter Correct Subject";
        errorMessage.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length < 10) {
        text = "Please Enter valid Phone Number";
        errorMessage.innerHTML = text;
        return false;
    }
    if (email.indexOf('@') == -1 || email.length < 6) {
        text = "Please Enter valid Email";
        errorMessage.innerHTML = text;
        return false;
    }
    if (message.length < 140) {
        text = "Please Enter More Than 140 Characters";
        errorMessage.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}
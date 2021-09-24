const firstnameEl = document.querySelector("#firstname");
const lastnameEl = document.querySelector("#lastname");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const submitEl = document.querySelector("#submit");

const form = document.querySelector("#form");




form.addEventListener("input", (e) => {
     e.preventDefault();
    
    switch(e.target.id) {
        case "firstname":
            checkFirstName();
            break;
            case "lastname":
                checkLastName();
                break;
                case "email":
                    checkEmail();
                    break;
                    case "password":
                        checkPassword();
                        break;
    }
});

function checkValidation(){
    checkFirstName();
    checkFirstName();
    checkEmail();
    checkPassword();
}
//prevent default
form.addEventListener("submit", (e)=>{
   e.preventDefault();

    //Validate Form

    let isFirstNameValid = checkFirstName(),
    isLastNameValid = checkLastName(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword();

    let isFormValid = isFirstNameValid && isLastNameValid && isEmailValid
    && isPasswordValid;

    if (isFormValid){

    }
});

const isRequired = value => value === "" ? false:true;


 const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const showError = (input, message) =>{
    // get the form-field element
    const formField = input.parentElement;

    // add the error message
    formField.classList.remove('success');
        formField.classList.add('error');

    //show error messages
    const error = formField.querySelector("small");
    const color = formField.querySelector("input");
    color.classList.add("err");
    color.classList.add("icon")
    error.textContent = message;
}

const showSuccess = (input) =>{
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
        formField.classList.add('success');

    //hide error messages
    const error = formField.querySelector("small");
    const color2 = formField.querySelector("input");
    color2.classList.add("suc");
    
    error.textContent = '';
}
console.log(showError)

const checkFirstName = () =>{
    let valid = false;

    const min = 3;

    const max = 30;

    const firstName = firstnameEl.value.trim();

    if(!isRequired(firstName)){
        showError(firstnameEl, "First Name cannot be Empty");
    }
    else if(!isBetween(firstName.length, min, max)){
        showError(firstnameEl, `First Name must be between ${min} and ${max} characters.`)


    } else {
        showSuccess(firstnameEl);
        valid = true;
    }
    return valid;
}

const checkLastName = () =>{
    let valid = false;

    const min = 3;

    const max = 30;

    const lastName = lastnameEl.value.trim();

    if(!isRequired(lastName)){
        showError(lastnameEl, "Last Name cannot be Empty");
    }
    else if(!isBetween(lastName.length, min, max)){
        showError(lastnameEl, `Last Name must be between ${min} and ${max} characters.`)


    } else {
        showSuccess(lastnameEl);
        valid = true;
    }
    return valid;
}

const checkEmail = () => {
    let valid = false;

    const email = emailEl.value.trim();

    if(!isRequired(email)){
        showError(emailEl, "Email cannot be empty")
    }
    else if(!isEmailValid(email)){
        showError(emailEl, "Looks like this is not an email");

    } else{
        showSuccess(emailEl);
        valid = true;
    }
    return valid

}

const checkPassword = () => {
    let valid = false;

    const password = passwordEl.value.trim();

    if(!isRequired(password)){
        showError(passwordEl, "Password cannot be empty")
    }
    else if(!isPasswordSecure(password)){
        showError(passwordEl, "Password must have at least 8 characters that includes at least 1 uppercase, 1 number, and 1 special character in (!@#$%^&*)");

    } else{
        showSuccess(passwordEl);
        valid = true;
    }
    return valid

}
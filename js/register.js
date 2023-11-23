// Selecting form and input elements
const form = document.querySelector("form");
const passwordInput = document.getElementById("password_registor_input");

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".input-box").appendChild(errorElement);
}
// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();
    // Retrieving input elements
    const firstnameInput = document.getElementById("firstname_input");
    const lastnameInput = document.getElementById("lastname_input");
    const emailInput = document.getElementById("email_registor_input");
    const genderInput1 = document.getElementById("dot-1");
    const genderInput2 = document.getElementById("dot-2");
    const confirmPasswordInput = document.getElementById("confirm_password_registor_input");
    const phInput = document.getElementById("ph_input");

    // Getting trimmed values from input fields
    const firstname = firstnameInput.value.trim();
    const lastname = lastnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmpassword = confirmPasswordInput.value.trim();
    const ph = phInput.value.trim();
    const gender1 = genderInput1.value.trim();
    const gender2 = genderInput2.value.trim();
    // const date = dateInput.value;
    // const gender = genderInput.value;
    // Regular expression pattern for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    // Clearing previous error messages
    document.querySelectorAll(".input-box .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());
    // Performing validation checks
    if (firstname === "") {
        showError(firstnameInput, "Enter your first name");
    }
    if (lastname === "") {
        showError(lastnameInput, "Enter your last name");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }


    if (password === "") {
        showError(passwordInput, "Enter your password");
    }
    if (confirmpassword === "") {
        showError(confirmPasswordInput, "Enter confirm password");
    }
    if (confirmpassword !== password) {
        showError(confirmPasswordInput, "password not match");
    }

    if (ph === "") {
        showError(phInput, "Enter phone number password");
    }

     
    
    
    if (gender1 === "" && gender2 === "" ) {
        showError(genderInput1, "Select your gender");
    }
    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".input-box .error");
    if (errorInputs.length > 0) return;
    // Submitting the form
    form.submit();
}
// Handling form submission event
form.addEventListener("submit", handleFormData);
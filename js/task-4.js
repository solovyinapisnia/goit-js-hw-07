'use strict';

const formElement = document.querySelector("form.login-form");

formElement.addEventListener("submit", event => {
    event.preventDefault();
    
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
  
    if (email === "" || password === "") {
        return alert("All form fields must be filled in");
    }
    const result = {
        email: email,
        password: password,
    }

    console.log(result);
    form.reset();
});

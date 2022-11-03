"use strict";
(function() {


    const formEl = document.querySelector('.register');
    const nameGroupEl = document.querySelector('.register-name');
    const nameInputEl = document.querySelector('.register-name__input');
    const emailInputEl = document.querySelector('.register-email__input');
    const emailErrorEl = document.querySelector('.register-email__error');
    const confirmInputEl = document.querySelector('.register-confirm__input');
    const confirmErrorEl = document.querySelector('.register-confirm__error');
    const selectEl = document.querySelector('.register-tier__select');
    const selectErrorEl = document.querySelector('.register-tier__error'); 

    nameInputEl.addEventListener('blur', (e) => {
        let isInvalid = false;
        nameGroupEl.classList.remove('register-name--invalid');

        if(!nameInputEl.value){
            nameGroupEl.classList.add('register-name--invalid');
            isInvalid = true;
        }

        if(isInvalid){
            e.preventDefault();
        }
    });

    emailInputEl.addEventListener('blur', (e) => {
        let isInvalid = false;
        emailErrorEl.innerText = "";

        if(!emailInputEl.value){
            emailErrorEl.innerText = "Email field is required";
            isInvalid = true;
        }

        if(isInvalid){
            e.preventDefault();
        }
    });

    confirmInputEl.addEventListener('blur', (e) => {
        let isInvalid = false;
        confirmErrorEl.innerText = "";

        if(!confirmInputEl.value){
            confirmErrorEl.innerText = "Confirm Email field is required";
            isInvalid = true;
        }

        if(confirmInputEl.value !== emailInputEl.value){
            confirmErrorEl.innerText = "This field must match the email";
            isInvalid = true;
        }

        if(isInvalid){
            e.preventDefault();
        }
    });

    selectEl.addEventListener('blur', (e) => {
        let isInvalid = false;
        selectErrorEl.innerText = "";
        if(selectEl.value == 0){
            selectErrorEl.innerText = "Select field is required";
            isInvalid = true;
        }

        if(isInvalid){
            e.preventDefault();
        }
    });

    formEl.addEventListener('submit', (event) => {

        let isInvalid = false;
        emailErrorEl.innerText = "";
        confirmErrorEl.innerText = "";
        selectErrorEl.innerText = "";
        nameGroupEl.classList.remove('regiter-name--invalid');

        if(!nameInputEl.value){
            nameGroupEl.classList.add('register-name--invalid');
            isInvalid = true;
        }

        if(!emailInputEl.value){
            emailErrorEl.innerText = "Email field is required";
            isInvalid = true;
        }

        if(!confirmInputEl.value){
            confirmErrorEl.innerText = "Confirm Email field is required";
            isInvalid = true;
        }

        if(confirmInputEl.value !== emailInputEl.value){
            confirmErrorEl.innerText = "This field must match the email";
            isInvalid = true;
        }

        if(selectEl.value == 0){
            selectErrorEl.innerText = "Select field is required"
            isInvalid = true;
        }

        if(isInvalid){
            event.preventDefault();
        }
    });

})();
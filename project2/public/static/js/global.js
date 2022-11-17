"use strict";
(function() {

    const formEl = document.querySelector('.modal-form');
    const emailInputEl = document.querySelector('.subscribe-email__input');
    const emailErrorEl = document.querySelector('.subscribe-email__error');
    const confirmInputEl = document.querySelector('.subscribe-confirm__input');
    const confirmErrorEl = document.querySelector('.subscribe-confirm__error');
    const menuBtn = document.querySelector('.gg-menu');
    const cardBtnList = document.querySelectorAll('.card-btn');
    const dropdown = document.querySelector('.dropdown-content');
    const modalEl = document.querySelector('.modal');
    const closeEl = document.querySelector('.subscribe__close');

    menuBtn.addEventListener('click', function(){
        dropdown.classList.toggle('active');
    });
        
    menuBtn.addEventListener('keyup', (event) => {
        if(event.keyCode == '13'){
            dropdown.classList.toggle('active');
        }
    });

    formEl.addEventListener('submit', (event) => {

        let isInvalid = false;
        emailErrorEl.innerText = "";
        confirmErrorEl.innerText = "";
        emailInputEl.classList.remove('error');
        confirmInputEl.classList.remove('error')

        if(!emailInputEl.value){
            emailErrorEl.innerText = "Email field is required";
            isInvalid = true;
            emailInputEl.classList.toggle('error');
        }else if(emailInputEl.value.indexOf('@')==-1){
            emailErrorEl.innerText = "The field be a valid email address including a @";
            isInvalid = true;
            emailInputEl.classList.toggle('error');
        }

        if(!confirmInputEl.value){
            confirmErrorEl.innerText = "Confirm Email field is required";
            confirmInputEl.classList.toggle('error');
            isInvalid = true;
        }

        if(confirmInputEl.value !== emailInputEl.value){
            confirmErrorEl.innerText = "This field must match the email";
            confirmInputEl.classList.toggle('error');
            isInvalid = true;
        }

        if(isInvalid){
            event.preventDefault();
        }
    });


    emailInputEl.addEventListener('blur', (e) => {
        let isInvalid = false;
        emailErrorEl.innerText = "";
        emailInputEl.classList.remove('error');
        if(!emailInputEl.value){
            emailErrorEl.innerText = "Email field is required";
            emailInputEl.classList.toggle('error');
            isInvalid = true;
        }else if(emailInputEl.value.indexOf('@')==-1){
            emailErrorEl.innerText = "The field be a valid email address including a @";
            emailInputEl.classList.toggle('error');
            isInvalid = true;
        }

        if(isInvalid){
            e.preventDefault();
        }
    });

    confirmInputEl.addEventListener('blur', (e) => {
        let isInvalid = false;
        confirmErrorEl.innerText = "";
        confirmInputEl.classList.remove('error')
        if(!confirmInputEl.value){
            confirmErrorEl.innerText = "Confirm Email field is required";
            confirmInputEl.classList.toggle('error');
            isInvalid = true;
        }

        if(confirmInputEl.value !== emailInputEl.value){
            confirmErrorEl.innerText = "This field must match the email";
            confirmInputEl.classList.toggle('error');
            isInvalid = true;
        }

        if(isInvalid){
            e.preventDefault();
        }
    });


    for(let i = 0; i<cardBtnList.length; i++ ){
        cardBtnList[i].addEventListener('click', function(){
            modalEl.showModal();
        });
    }

    closeEl.addEventListener('click',  () => {
        modalEl.close();
    });
    
})();
"use strict";
(function() {

    const dropdownList = document.querySelectorAll(".dropdown");
    for(let i = 0; i<dropdownList.length; i++ ){
        dropdownList[i].addEventListener("click", function(){
            dropdownList[i].classList.toggle("active");
        });
    }

})();
var link=document.querySelector(".contacts-btn"),feedback=document.querySelector(".form-feedback"),close=document.querySelector(".close"),form=feedback.querySelector("form"),userName=feedback.querySelector("#us-nam");link.addEventListener("click",function(a){a.preventDefault(),feedback.classList.add("opener"),userName.focus()}),close.addEventListener("click",function(a){a.preventDefault(),feedback.classList.remove("opener")}),form.addEventListener("submit",function(a){userName.value&&email.value?localStorage("userName",userName.value):a.preventDefault()}),window.addEventListener("keydown",function(a){27===a.keyCode&&feedback.classList.contains("opener")&&feedback.classList.remove("opener")});
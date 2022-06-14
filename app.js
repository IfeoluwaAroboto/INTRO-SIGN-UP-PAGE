const email = document.querySelector(".email")
const error3 = document.querySelector(".error-message3")
const error = document.querySelector(".error-message")
const lastName = document.querySelector(".Last-name")
const error2 = document.querySelector(".error-message2")
const password = document.querySelector(".password")
const error4 = document.querySelector(".error-message4")
const name = document.querySelector(".name")
const text = /[a-zA-Z0-9][a-zA-Z0-9-]/
const message =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const icon3 = document.querySelector(".icon3")
const icon = document.querySelector(".icon")
const icon2 = document.querySelector(".icon2")
const icon4 = document.querySelector(".icon4")
const freeTrial = document.querySelector(".freetrial")
function input3(email){
if (email.value === ""){
    error3.style.display = "block" 
    email.style.borderColor = "red"
    icon3.style.display = "block"
 }
  else if(email.value.match(message)) {
    email.style.borderColor= "green"
    error3.style.display = "none"
    icon3.style.display = "none" }

}

function input(name){
    if (name.value === ""){
        error.style.display = "block" 
        name.style.borderColor = "red"
        icon.style.display = "block"
     }
      else if(name.value.match(text)) {
        name.style.borderColor= "green"
        error.style.display = "none"
        icon.style.display = "none" }
    
}

function input2(lastName){
    if (lastName.value === ""){
        error2.style.display = "block" 
        lastName.style.borderColor = "red"
        icon2.style.display = "block"
     }
      else if(lastName.value.match(text)) {
        lastName.style.borderColor= "green"
        error2.style.display = "none"
        icon2.style.display = "none"}
    
}

function input4(password){
    if (password.value === ""){
        error4.style.display = "block" 
        password.style.borderColor = "red"
        icon2.style.display = "block"
     }
      else if(password.value.match(text)) {
        password.style.borderColor= "green"
        error4.style.display = "none"
        icon4.style.display = "none" }
    
}
freeTrial.addEventListener("click", function(){
     return input (name) 
  
})
freeTrial.addEventListener("click", function(){
    return input3 (email) 
 
})
freeTrial.addEventListener("click", function(){
    return input2 (lastName) 
 
})
freeTrial.addEventListener("click", function(){
    return input4 (password) 
 
})
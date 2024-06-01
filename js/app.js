// task #01 -----------------------------------------------
document.addEventListener("keypress",function (eventHandler, keyboardEvent){
  document.getElementById("text-input").value = eventHandler.code;
})
document.addEventListener("mousedown",function (eventHandler, keyboardEvent){
  document.getElementById("text-input").value = eventHandler.button == 0 ? "LClick" : "RClick";
})
//---------------------------------------------------------

// task #02------------------------------------------------

const nameRegExp = /^[A-Z][A-Za-z]{2,}\s[A-Z][A-Za-z]{2,}$/;
const emailRegExp = /^[A-Za-z0-9._#${|}]{2,}@[a-z0-9.-]+(\.[a-z0-9.-]+)*$/;
const passwordRegExp = /^\w{8,16}$/;
let isUserNameValid = false, isEmailValid = false,
  isPasswordValid = false, isUserAcceptTerms = false;
let password;

let signUpForm = document.getElementById("signup-form");
let termsCheckBox = document.getElementById("terms-checkbox");
let submitBtn = document.getElementById("login-form-submit");



document.querySelectorAll("input").forEach(function (element){
  element.addEventListener("focus", function (event) {
    element.style.border = "solid 3px blue"
  })
  element.addEventListener('focusout', function (event) {

    if(isInputValid(element)){
      element.style.border = "solid 3px green"
    } else {
      element.style.border = "solid 3px red"
    }
  })
})

submitBtn.addEventListener("click", function(){
  isUserAcceptTerms = termsCheckBox.checked;
  console.log( "checkbox --> " + isUserAcceptTerms);
  if(isUserAcceptTerms && isUserNameValid && isEmailValid && isPasswordValid){
    signUpForm.submit();
  } else {
    validateAllInputs();
  }
})



function isInputValid(element= new HTMLElement()){
  switch (element.id){
    case "user-name-input":
      isUserNameValid = nameRegExp.test(element.value);
      return isUserNameValid;
    case("email-input"):
      isEmailValid =emailRegExp.test(element.value);
      return isEmailValid;
    case("password-input"):
      if(passwordRegExp.test(element.value)){
        password=element.value;
      }
      return passwordRegExp.test(element.value);
    case("repeat-password-input"):
      isPasswordValid = (element.value === password);
      return isPasswordValid;
    default:
      return false;
  }
}

function validateAllInputs(){
  document.querySelectorAll("input").forEach(function (element){
    if(isInputValid(element)){
      element.style.border = "solid 3px green"
    } else {
      element.style.border = "solid 3px red"
    }
  })
}
//--------------------------------------------------------

// animation implementation ------------------------------
function animate(duration=5000, start = 0, end = 100,
                 frame = function (value = start){}){

  let increment = (20 / duration ) * (end - start);

  let interval =setInterval(function (){
    if(start <= end){
      frame(start);
      start += increment;
    } else {
      clearInterval(interval);
    }
  }, 20)
}

document.querySelectorAll(".image").forEach(
  function (element){
    element.addEventListener('mouseover', function(){
      animate(2000, 0, 70, function (val){
        element.style.opacity = (100 - val) /100;
      })
    })
    element.addEventListener('mouseout', function(){
      animate(2000, 30, 100, function (val){
        element.style.opacity = val / 100;
      })
    })
  }
)




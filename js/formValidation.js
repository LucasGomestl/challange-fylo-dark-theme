function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function formInvalid(){
    email.style.border = "1.5px solid #fc4848"; 
}

const btnSubmit = document.querySelector(".submit"),
      email = document.querySelector(".signup-form input[name='email']"),
      msgError = document.querySelector(".msgError")
      message = {
          empty: "Required field",
          invalidEmail: "Please provide a valid email"
      };

btnSubmit.onclick = function(){
    let emailValue = email.value;

    if(emailValue.length == 0){
        msgError.innerHTML = message.empty;
        formInvalid();
    }else if(!validateEmail(emailValue)){
        msgError.innerHTML = message.invalidEmail;
        formInvalid();
    }else{
        msgError.innerHTML= ""
        email.style.border = "0px" 
    }
    return false
}

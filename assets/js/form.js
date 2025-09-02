function show_result(){
    let userName = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repeatPassword = document.getElementById("repeatPassword").value;
    let errorElement = document.querySelector(".error");
    let errors="";

    
    if(errorElement.textContent.trim()!=""){
        errorElement = "";
    }
    if(!userName || !lastName || !age || !email || !password || !repeatPassword){
        errors+="همه فیلدها باید پر شوند!"
    }
    if(userName.length&&lastName.length<2){
        errors+=`نام یا نام کاربری بیش از حد کوتاه است.<br><br>`;
    }
    if(userName.length&&lastName.length>255){
        errors+=`نام یا نام کاربری بیش از حد بزرگ است.<br><br>`;
    }
    if(age!=""&&age<15||age>30){
        errors+=`سن شما باید بین 15 تا 30 سال باشد.<br><br>`;
    }
    if(password!=""&&password.length<8){
        errors+=`طول پسورد نباید کمتر از 8 کاراکتر باشد!<br><br>`;
    }
    if(password!=repeatPassword){
        errors+=`رمزعبور و تکرار آن یکسان نیستند.<br><br>`;
    }
    if(errors.length>0){

        errorElement.innerHTML+=errors;
    }
    else{
        alert("فرم شما پذیرفته شد.")
    }
}
function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("repeatPassword").value = "";
    document.querySelector(".error").innerHTML = "";
}
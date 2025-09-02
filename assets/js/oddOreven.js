function Odd_Even(){
    let number = document.getElementById("number").value;

    if(number%2==0){
        document.getElementById("oddEven").value = "your Number is Even";
        return;
    }
    else{
        document.getElementById("oddEven").value = "your Number is Odd";
    }
}

function clearField(){
    document.getElementById("number").value = "" ;
    document.getElementById("oddEven").value = "" ;
}
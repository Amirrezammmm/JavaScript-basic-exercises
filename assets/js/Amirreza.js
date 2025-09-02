function show(){
    let reversedName = document.getElementById("reversedName");
    let MyName = "Amirreza";
    let RevArr = "";
    let arr =[];
    let revarr = [];
    arr = MyName.split("");
    
    for(let i=MyName.length;i>=0;i--){
        revarr.push(arr[i]);
    }
    RevArr = String(revarr.join(""));

    reversedName.innerHTML = RevArr;

}

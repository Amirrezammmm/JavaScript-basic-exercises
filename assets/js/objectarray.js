let people = [
    {name: "Amirreza", lastname:"Goodarzi",age: 24 },
    {name: "Mahdi", lastname:"Rasooli", age:18},
    {name: "matin", lastname:"rezaei",age:26}
]

function add_person(){

    let showpeople = document.getElementById("show_people");
    showpeople.innerHTML="";

    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let age = document.getElementById("age").value;

    let newPerson = {name:"",lastname:"",age:0};
    newPerson.name = name;
    newPerson.lastname = lastname;
    newPerson.age = age;
    people.push(newPerson);

    

    people.forEach(user =>{
        const wrapper = document.createElement("div");

        for(let key in user){
            const p =document.createElement("p");
            p.textContent = `${key}: ${user[key]}`;
            wrapper.appendChild(p);
        }
        wrapper.style.marginBottom = "10px";
        showpeople.appendChild(wrapper);   
    });

    let removeLastPerson = document.createElement("button");
        removeLastPerson.type = "button";
        removeLastPerson.onclick=remove_person;
        removeLastPerson.textContent = "remove last person";
        showpeople.appendChild(removeLastPerson);

    let removeFirstPerson = document.createElement("button");
        removeFirstPerson.type = "button";
        removeFirstPerson.onclick=remove_first;
        removeFirstPerson.textContent = "remove first person";
        showpeople.appendChild(removeFirstPerson);

        function remove_person(){
            people.pop();
            people.forEach(user =>{
                const wrapper_2 = document.createElement("div");
        
                for(let key in user){
                    const p =document.createElement("p");
                    p.textContent = `${key}: ${user[key]}`;
                    wrapper_2.appendChild(p);
                }
                let divider = document.createElement("p");
                divider.textContent= "-------------------------------------";
                wrapper_2.style.marginBottom = "10px";
                showpeople.appendChild(wrapper_2);
                showpeople.appendChild(divider);   
            });
        }
        function remove_first(){
            people.shift();
            people.forEach(user =>{
                const wrapper_3 = document.createElement("div");
        
                for(let key in user){
                    const p =document.createElement("p");
                    p.textContent = `${key}: ${user[key]}`;
                    wrapper_3.appendChild(p);
                }
                wrapper_3.style.marginBottom = "10px";
                showpeople.appendChild(wrapper_3);   
            });
        }

}
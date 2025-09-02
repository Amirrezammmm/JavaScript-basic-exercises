function createRandom() {
    let arr = [];
    for (let i = 0; i < 30; i++) {
        let random = Math.floor(Math.random() * 100) + 1;
        arr.push(random);
    }
    let randomnumbers = document.getElementById("randomArray");
    randomnumbers.innerHTML = arr.join(", ");
}

function calculate() {
    let randomArray = document.getElementById("randomArray").innerHTML.split(", ").map(Number);
    

    let biggest = randomArray[0]; 
    for (let i = 1; i < randomArray.length; i++) {
        if (randomArray[i] > biggest) {
            biggest = randomArray[i];
        }
    }

  
    let smallest = randomArray[0];
    for (let i = 1; i < randomArray.length; i++) {
        if (randomArray[i] < smallest) {
            smallest = randomArray[i];
        }
    }

    

    let total = randomArray.reduce((acc, num) => acc + num, 0);


    let average = (total / randomArray.length).toFixed(2);


    document.getElementById("biggest").innerHTML = biggest;
    document.getElementById("smallest").innerHTML = smallest;
    document.getElementById("Total").innerHTML = total;
    document.getElementById("Average").innerHTML = average;
}

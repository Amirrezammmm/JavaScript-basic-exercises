let str = "سلام من امیررضا گودرزی هستم"; 
let result = ''; 
for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) { 
        result += str[i]; 
    }
}
document.getElementById('result').innerText = result; 

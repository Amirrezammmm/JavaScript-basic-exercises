let validation = false;
let names = ["Ali", "Mohammad", "Alireza", "Alimohammad", "Mohammadreza", "Hamidreza", "Arash", "Radmehr", "Armin", "Aryan"];

function guessName() {
    let GussedName = document.getElementById("GussedName");

    let RandomIndex = Math.floor(Math.random() * names.length);
    let RandomName = names[RandomIndex];
    GussedName.value = RandomName;
}

function isTrue() {
    alert("Yesssss, I Guess Correct,\n if you want to continue click on reset button ");
}

function isFalse() {
    let thename = document.getElementById("GussedName");
    if (names.length > 1) {
        names = names.filter(item => item !== thename);
        guessName();
    } else {
        alert("Only one name left, no more guesses!");
    }
    guessName();
}
function reloadPage() {
    location.reload();
}

function showBirthYear() {
    const age = parseInt(document.getElementById("age").value);
    if (isNaN(age) || age < 0) {
        document.getElementById("result").textContent = "سن معتبر وارد کنید.";
        return;
    }
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    document.getElementById("result").textContent = "سال تولد شما: " + birthYear;
}
function generateSecurePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

function generateAndShowPassword() {
    const length = document.getElementById("length").value;
    if (length < 8 || length > 20) {
        document.getElementById("passwordOutput").textContent = "لطفاً طول پسورد را بین ۸ تا ۲۰ وارد کنید.";
        return;
    }
    const password = generateSecurePassword(length);
    document.getElementById("passwordOutput").textContent = "secure password: " + password;
}
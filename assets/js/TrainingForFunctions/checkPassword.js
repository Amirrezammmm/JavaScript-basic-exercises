function isSecure(password) {
    const specialChars = ['*', '&', '^', '%', '$', '@', '!', '.', ',', '~'];

    const hasNumber = /\d/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const letterCount = (password.match(/[a-zA-Z]/g) || []).length;
    const hasEnoughLetters = letterCount >= 5;
    const hasMinLength = password.length >= 8;
    const hasSpecialChar = specialChars.some(char => password.includes(char));

    return hasNumber && hasUpperCase && hasEnoughLetters && hasMinLength && hasSpecialChar;
  }

  function checkPasswords() {
    const input = document.getElementById("passwordsInput").value.trim();
    const passwords = input.split('\n').map(p => p.trim()).filter(p => p !== "");

    if (passwords.length === 0) {
      document.getElementById("result").innerText = "لطفاً حداقل یک رمز وارد کنید.";
      return;
    }

    let allSecure = true;
    let insecureList = [];

    for (let pass of passwords) {
      if (!isSecure(pass)) {
        allSecure = false;
        insecureList.push(pass);
      }
    }

    const resultBox = document.getElementById("result");

    if (allSecure) {
      resultBox.style.color = "green";
      resultBox.innerText = " همه‌ی رمزها ایمن هستند.";
    } else {
      resultBox.style.color = "red";
      resultBox.innerText = ` رمزهای زیر ایمن نیستند:\n${insecureList.join('\n')}`;
    }
  }
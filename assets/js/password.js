function isSecurePassword(password) {
    const hasNumber = /[0-9]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasMinLength = password.length >= 8;
    const hasMinAlpha = (password.match(/[a-zA-Z]/g) || []).length >= 5;

    return hasNumber && hasUpperCase && hasSpecialChar && hasMinLength && hasMinAlpha;
  }

  function checkPassword() {
    const password = document.getElementById("password").value;
    const result = document.getElementById("result");

    if (isSecurePassword(password)) {
      result.textContent = "اوکی  رمز ایمن است.";
      result.className = "ok";
    } else {
      result.textContent = "غلط  رمز ایمن نیست.";
      result.className = "wrong";
    }
  }
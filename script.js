document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");
  
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); 
      const username = usernameField.value;
      const password = passwordField.value;
      if (username === "kavya2124@gmail.com" && password === "kavya2004") {
        window.location.href = "success.html"; 
      } 
      else {
        errorMessage.textContent = "Invalid username or password.";
      }
    });
  });
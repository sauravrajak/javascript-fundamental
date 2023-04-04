const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");
const prompt = document.querySelector(".prompt");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  if (password.value !== "" || confirmPassword.value !== "") {
    if (password.value === confirmPassword.value) {
      prompt.innerText = "Password Matched";
      prompt.style.background = "green";
    } else {
      prompt.innerText = "Password Does not Matched";
      prompt.style.background = "red";
    }
  }
});

console.log();

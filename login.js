document.querySelector(".login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Welcome back to Ghorbety!");

  setTimeout(() => {
    window.location.href = "./8orbty.html";
  }, 1000);
});

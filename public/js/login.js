const form = document.getElementById("loginForm");

handleSubmit = (e) => {
  e.preventDefault();

  const { email, password } = e.target.elements;

  const loginInfo = {
    email: email.value,
    password: password.value,
  };

  fetch("/api/teachers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginInfo),
  }).then((res) => {
    if (res.status === 200) {
      location.href = "/profile";
      email.value = "";
      password.value = "";
    }
  });
};

form.addEventListener("submit", handleSubmit);

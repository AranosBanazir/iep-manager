const form = document.getElementById("loginForm");

// navigator.geolocation.getCurrentPosition((position) => {
//   location.href = "https://www.openstreetmap.org/#map=18/43.44798/-89.75012";
// });

handleSubmit = (e) => {
  e.preventDefault();
  const alertDiv = document.getElementById("alert-div");
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
    } else if (res.status >= 400) {
      alertDiv.innerHTML = `
      <div role="alert" class="alert alert-error mt-8">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Error! Password and/or Email provided is incorrect.</span>
</div>
      `;
      setTimeout(() => {
        alertDiv.innerHTML = "";
      }, 2000);
    }
  });
};

form.addEventListener("submit", handleSubmit);

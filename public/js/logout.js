const logout = document.getElementById("logout");

function logoutTime(e) {
  e.preventDefault();
  console.log("clicked");
  fetch('/api/teachers/logout').then(()=>{
    location.reload()
  })
}

logout.addEventListener("click", logoutTime);

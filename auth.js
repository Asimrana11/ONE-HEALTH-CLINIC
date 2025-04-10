// Redirect to login if not authenticated
if (window.location.pathname.includes("dashboard.html")) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      window.location.href = "login.html";
    }
  }
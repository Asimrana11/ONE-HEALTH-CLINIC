// Mock user database
const users = [
  { role: "admin", username: "admin", password: "admin123", name: "Admin" },
  { role: "doctor", username: "doctor1", password: "doc123", name: "Dr. Smith" },
  { role: "nurse", username: "nurse1", password: "nurse123", name: "Nurse Jane" }
];

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = users.find(u => 
    u.role === role && 
    u.username === username && 
    u.password === password
  );

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = `dashboard/${role}.html`;
  } else {
    alert("Invalid credentials!");
  }
});

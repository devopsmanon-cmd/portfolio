// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle (dark/light)
const themeBtn = document.getElementById("themeBtn");

function setTheme(theme) {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    themeBtn.textContent = "☀️";
  } else {
    document.documentElement.removeAttribute("data-theme");
    themeBtn.textContent = "🌙";
  }
  localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "light" ? "light" : "dark");

themeBtn.addEventListener("click", () => {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  setTheme(isLight ? "dark" : "light");
});

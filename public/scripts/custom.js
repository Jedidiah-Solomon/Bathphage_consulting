// Toggle dark mode function
function toggleDarkMode() {
  const main = document.querySelector("main");
  main.classList.toggle("dark");
}

// Toggle dark mode on button click
const darkModeToggle = document.querySelector("#dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
  toggleDarkMode();
});

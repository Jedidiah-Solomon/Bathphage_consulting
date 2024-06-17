// custom.js

// Toggle dark mode function
function toggleDarkMode() {
  const main = document.querySelector("main");
  main.classList.toggle("dark");
}

// Toggle dark mode on button click
const darkModeToggle = document.querySelector("#dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
  toggleDarkMode();
  console.log("Dark mode toggled");
});

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", function () {
    console.log("Hamburger button clicked");

    // Toggle visibility of mobile menu
    if (
      mobileMenu.style.display === "none" ||
      mobileMenu.style.display === ""
    ) {
      mobileMenu.style.display = "flex";
      console.log("Mobile menu opened");
    } else {
      mobileMenu.style.display = "none";
      console.log("Mobile menu closed");
    }

    // Set aria-expanded attribute for accessibility
    const isVisible = mobileMenu.style.display === "flex";
    mobileMenuButton.setAttribute("aria-expanded", isVisible);
  });
});

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Save theme to local storage
const saveToLocalStorage = (color) => {
  localStorage.setItem("theme", color);
};

// Dark or light images
const imageMode = (color) => {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
};

const toggleDarkLightMode = (isLight) => {
  nav.style.backgroundColor = isLight
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";

  textBox.style.backgroundColor = isLight
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";

  toggleIcon.children[0].textContent = isLight ? "Light Mode" : "Dark Mode";

  isLight
    ? toggleIcon.children[1].classList.replace("fa-moon", "fa-sun")
    : toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");

  isLight ? imageMode("light") : imageMode("dark");
};

// switch Theme Dynamically
const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    saveToLocalStorage("dark");

    toggleDarkLightMode(false);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    saveToLocalStorage("light");
    toggleDarkLightMode(true);
  }
};

// Event listener
toggleSwitch.addEventListener("change", switchTheme);

// Check local storage for theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  if (savedTheme === "dark") {
    toggleSwitch.checked = true;
    toggleDarkLightMode(false);
  }
}

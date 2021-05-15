const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Update html attributes

const updateAttributes = (element, attr, value) => {
  element[attr] = value;
};

// Dark mode styles

const darkMode = () => {
  updateAttributes("nav", "style.backgroundColor", "rgb(0 0 0 / 50%)");
  //   nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";

  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");

  image1.src = "img/undraw_proud_coder_dark.svg";
  image2.src = "img/undraw_feeling_proud_dark.svg";
  image3.src = "img/undraw_conceptual_idea_dark.svg";
};

// Light mode styles

const lightMode = () => {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";

  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");

  image1.src = "img/undraw_proud_coder_light.svg";
  image2.src = "img/undraw_feeling_proud_light.svg";
  image3.src = "img/undraw_conceptual_idea_light.svg";
};

// switch Theme Dynamically
const switchTheme = (event) => {
  console.log(`event`, event.target.checked);

  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
  }
};

// Event listener
toggleSwitch.addEventListener("change", switchTheme);

const toggleSwitch = document.querySelector('input[type="checkbox"]');

// switch Theme Dynamically
const switchTheme = (event) => {
  console.log(`event`, event.target.checked);

  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};

// Event listener
toggleSwitch.addEventListener("change", switchTheme);

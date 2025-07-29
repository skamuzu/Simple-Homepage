let darkMode = localStorage.getItem("darkmode");
const closeButton = document.getElementById("close");
const themeButton = document.getElementById("theme-button");
const logo = document.getElementById("logo");
const hamburger = document.getElementById("hamburger")


const enableDarkmode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkmode','active');
    logo.src = 'resources/logo-dark.svg'
    themeButton.src = "resources/Moon_fill_light.svg"
    closeButton.src = "resources/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
    hamburger.src = "resources/menu_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
};

const disableDarkmode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkmode',null);
    logo.src = 'resources/logo-light.svg'
    themeButton.src = "resources/Sun_fill.svg"
    closeButton.src = "resources/close_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
    hamburger.src = "resources/hamburger-button.svg"
};

if (darkMode === "active") {
    themeButton.src = "resources/Moon_fill_light.svg"
    enableDarkmode()
}

themeButton.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkmode')
  darkMode !== "active" ? enableDarkmode() : disableDarkmode();
  console.log(themeButton)
});

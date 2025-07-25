let darkMode = localStorage.getItem("darkmode");
const theme = document.getElementsByClassName("theme")[0];
const themeButton = document.getElementById("theme-button");
const logo = document.getElementById("logo")



const enableDarkmode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkmode','active');
    logo.src = 'resources/logo-dark.svg'
    darkButton.src = "resources/Moon_fill.svg"
};

const disableDarkmode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkmode',null);
    logo.src = 'resources/logo-light.svg'
    darkButton.src = "resources/Moon_fill_light.svg"
};

if (darkMode === "active") enableDarkmode()

theme.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkmode')
  darkMode !== "active" ? enableDarkmode() : disableDarkmode();
});



let darkMode = localStorage.getItem("darkmode");
const theme = document.getElementsByClassName("theme")[0];
const themeButton = document.getElementById("theme-button");
const logo = document.getElementById("logo");
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementsByClassName("sidebar")[0];

function dragstartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}


const enableDarkmode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkmode','active');
    logo.src = 'resources/logo-dark.svg'
    themeButton.src = "resources/Moon_fill_light.svg"

    // theme.style.justifyContent = "flex-start"
    // theme.classList.add('slide')
};

const disableDarkmode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkmode',null);
    logo.src = 'resources/logo-light.svg'
    themeButton.src = "resources/Sun_fill.svg"
    // theme.style.justifyContent = "flex-end"
};

if (darkMode === "active") {
    themeButton.src = "resources/Moon_fill_light.svg"
    enableDarkmode()
}

themeButton.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkmode')
  darkMode !== "active" ? enableDarkmode() : disableDarkmode();
});

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-toggle");
})
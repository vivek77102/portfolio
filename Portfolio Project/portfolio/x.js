console.log("Script loaded successfully.");

let theme = localStorage.getItem('theme');
if (theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}

let themedot = document.getElementsByClassName("theme-dot");

for (var i = 0; themedot.length > i; i++) {
    themedot[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
        console.log("Option clicked:", mode);
        setTheme(mode)
    })
};
   function setTheme(mode) {
        if (mode == "light") {
            document.getElementById("theme-style").href = "light.css";
        }
        if (mode == "blue") {
            document.getElementById("theme-style").href = "purple.css";
        }       
        if (mode == "green") {
            document.getElementById("theme-style").href = "darkolive.css";
        }
        if (mode == "pink") {
            document.getElementById("theme-style").href = "pink.css";
        }
        localStorage.setItem('theme', mode);
    }
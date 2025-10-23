window.onload = function () {
    alert("Script loaded!");
    var buttons = document.querySelectorAll("button img");
    buttons.forEach(button => button.addEventListener("click", () => {
        button.classList.toggle("button-selected");
    }))
};
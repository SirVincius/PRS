window.onload = function () {

    console.log("Loaded!");

    var numberChoiceButtons = document.querySelectorAll(".number-button");

    numberChoiceButtons.forEach(numberChoiceButton => {
        numberChoiceButton.addEventListener("click", () => {
            numberChoiceButtons.forEach(currentButton => {
                currentButton.classList.remove("button-selected");
            });
            numberChoiceButton.classList.add("button-selected");
        });
    });


    var buttons = document.querySelectorAll(".emotion-button");
    buttons.forEach(button => button.addEventListener("click", () => {
        button.classList.toggle("button-selected");
    }))

    var startButton = document.querySelector("#start-button");
    startButton.addEventListener("click", () => {
        startButton.classList.toggle("button-selected");
    })
};
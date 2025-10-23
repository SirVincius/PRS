window.onload = function () {

    alert("Loaded!");

        var numberChoiceButtons = document.querySelectorAll(".number-choice-button img");

        numberChoiceButtons.forEach(numberChoiceButton => {
            numberChoiceButton.addEventListener("click", () => {
                numberChoiceButtons.forEach(currentButton => {
                    currentButton.classList.remove("button-selected");
                });
                numberChoiceButton.classList.add("button-selected");
            });
        });


    var buttons = document.querySelectorAll(".emotion-button img");
    buttons.forEach(button => button.addEventListener("click", () => {
        button.classList.toggle("button-selected");
    }))
};
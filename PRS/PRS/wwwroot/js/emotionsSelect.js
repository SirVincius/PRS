window.onload = function () {

    var numberOfRounds = 0;
    var emotionList = new Set();
    var buttons = document.querySelectorAll(".emotion-button");
    var numberChoiceButtons = document.querySelectorAll(".number-button");
    var errorMessage = document.querySelector("#error-message");


    console.log("Loaded!");


    //Script for the number of round in a game
    numberChoiceButtons.forEach(numberChoiceButton => {
        numberChoiceButton.addEventListener("click", () => {
            numberChoiceButtons.forEach(currentButton => {
                currentButton.classList.remove("button-selected");
            });
            numberChoiceButton.classList.add("button-selected");
            numberOfRounds = parseInt(numberChoiceButton.value);
            console.log(numberOfRounds);
        });
    });

    //Script for the emotion selection
    buttons.forEach(button => button.addEventListener("click", () => {
        button.classList.toggle("button-selected");
        if (button.getAttribute("data-selected") === "true") {
            button.setAttribute("data-selected", "false");
            emotionList.delete(button.value);
            console.log(emotionList);
        }
        else {
            button.setAttribute("data-selected", "true");
            emotionList.add(button.value);
            console.log(emotionList);
        }
    }))

    document.getElementById("start-button").addEventListener("click", () => {
        document.getElementById("NumberOfRounds").value = numberOfRounds;
        document.getElementById("SelectedEmotions").value = JSON.stringify(Array.from(emotionList));
        console.log("Number of rounds : " + numberOfRounds);
        console.log("EmotionList length : " + emotionList.length);
        if (emotionList.size < 2) {
            errorMessage.classList.remove("hidden");
            errorMessage.innerHTML = "Veuillez choisir au moins 2 emotions.";
        } else if (numberOfRounds == 0) {
            errorMessage.classList.remove("hidden");
            errorMessage.innerHTML = "Veuillez choisir le nombre d'images a reconnaitre.";
        } else {
            document.getElementById("startGame").submit();
        }
    });
}; 


class Round {
    constructor(imageURL, emotion) {
        this.imageURL = imageURL;
        this.emotion = emotion;
    }
}

var emotionList = window.gameParameters.emotions
var numberOfRounds = window.gameParameters.numberOfRounds;
var index = 0;
var emotionButtons;
var rounds;

document.addEventListener("DOMContentLoaded", function () {
    
    //Create a button for each possible emotion
    emotionList.forEach(emotionName => {
        addEmotionButton(emotionName);
    })

    //Populate the rounds with an image and an associated emotion
    rounds = populateRound();
    console.log(rounds);
    rounds = randomizeRounds(rounds);
    console.log(rounds);

    emotionButtons = document.querySelectorAll(".emotion-button");

    activateEmotionButtonEventListeners();

    nextRound();

})

function addEmotionButton(emotionName) {
    var emotionsChoiceContainer = document.querySelector("#emotions-choice-container");

    var buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    var imageContainer = document.createElement("button");
    imageContainer.classList.add("img-container");
    imageContainer.classList.add("emotion-button");
    imageContainer.dataset.emotion = emotionName;

    var buttonImage = document.createElement("img");
    buttonImage.classList.add("img-fit");

    buttonImage.src = `../images/emotions/${emotionName}.jpg`;
    buttonImage.dataset.emotion = emotionName

    buttonContainer.append(imageContainer);
    imageContainer.append(buttonImage);

    emotionsChoiceContainer.append(buttonContainer);
}

function activateEmotionButtonEventListeners() {
    emotionButtons.forEach(btn => btn.addEventListener("click", function (e) {
        if (e.currentTarget.dataset.emotion == document.getElementById("emotion-to-recognize").dataset.emotion) { 
            e.currentTarget.classList.toggle("right-choice");
            let successSound = new Audio('../sounds/success.mp3');
            successSound.addEventListener("ended", () => {
                nextRound();
            });
            emotionButtons.forEach(btn => btn.disabled = true);
            successSound.play();
        }
        else
            e.currentTarget.classList.toggle("wrong-choice");
    }))
}

function populateRound() {
    var roundList = [];
    emotionList.forEach(emotion => {
        for (let i = 1; i <= 5; i++) {
            let round = new Round(`../images/${emotion}/${emotion}_${i}.png`, emotion);
            roundList.push(round);
        }
    })
    return roundList;
}

function randomizeRounds(roundList) {
    var randomizedRoundList = [];
    let random;
    while (roundList.length > 0) {
        random = Math.floor(Math.random() * roundList.length);
        randomizedRoundList.push(roundList[random]);
        roundList.splice(random, 1);
    }
    return randomizedRoundList;
}

function nextRound() {
    if (index < numberOfRounds) {
        //Reset buttons style
        emotionButtons.forEach(emotionButton => {
            emotionButton.classList.remove("wrong-choice");
            emotionButton.classList.remove("right-choice");
            emotionButton.disabled = false;
        })


        document.getElementById("emotion-to-recognize").src = rounds[index].imageURL;
        document.getElementById("emotion-to-recognize").dataset.emotion = rounds[index].emotion;
        index++;
    }
}
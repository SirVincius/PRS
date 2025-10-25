class Round {
    constructor(imageURL, emotion) {
        this.imageURL = imageURL;
        this.emotion = emotion;
    }
}

document.addEventListener("DOMContentLoaded", function () {

    //Retrieve possible emotions list
    var emotionList = ["Joy", "Sadness", "Anger", "Love", "Serenity"];

    //Create an object for each image to recognize with the corresponding emotion
    var rounds = [];
    var baseURL = "../images/";
    rounds.push(new Round(baseURL + "sad/sad_1.png", "Sadness"));
    rounds.push(new Round(baseURL + "happy/happy_1.png", "Joy"));
    
    //Create a button for each possible emotion
    emotionList.forEach(emotionName => {
        addEmotionButton(emotionName);
    })

    document.getElementById("emotion-to-recognize").src = rounds[1].imageURL;
    document.getElementById("emotion-to-recognize").dataset.emotion = rounds[1].emotion;

    activateEmotionButtonEventListeners();

    var counter = 2;
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
    var emotionButtons = document.querySelectorAll(".emotion-button");
    emotionButtons.forEach(btn => btn.addEventListener("click", function (e) {
        if (e.target.dataset.emotion == document.getElementById("emotion-to-recognize").dataset.emotion)
            console.log("Right");
        else
            console.log("Wrong");

    }))
}
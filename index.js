// Detecting the button click

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        playSound(this.innerHTML); //make a sound

        buttonAnimation(this.innerHTML);  //animate a pressed button
    });
}


// Detecting the key press

document.addEventListener("keydown", function (event) {

    playSound(event.key);  //make a sound

    buttonAnimation(event.key);  //animate a pressed button
});


// funt to trigger sound

function playSound(key) {

    switch (key) {
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "r":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "u":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "m":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "i":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;

        case "t":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default: console.log(key);
    }
}


// function for animation

function buttonAnimation(key) {
    document.querySelector("." + key).classList.add("pressed");

    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}
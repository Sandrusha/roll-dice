var dice = ["dice-"];
var maxDice = 6;

document.addEventListener("DOMContentLoaded", onLoad);

function rollDice() {
    var rndNumber = Math.floor(Math.random() * maxDice + 1);

    return rndNumber;
}

function onLoad() {
    var leftDiceDiv = document.getElementById("leftDiceDiv");
    var diceSideLeft = leftDiceDiv.getElementsByClassName("dice");
    var diceInfoLeft = rollDice();
    diceSideLeft[0].style.backgroundImage = `url(images/dice-${diceInfoLeft}.svg)`;

    var rightDiceDiv = document.getElementById("rightDiceDiv");
    var diceSideRight = rightDiceDiv.getElementsByClassName("dice");
    var diceInfoRight = rollDice();
    diceSideRight[0].style.backgroundImage = `url(images/dice-${diceInfoRight}.svg)`;
 

    winOrLose(diceInfoLeft, diceInfoRight);
}

function winOrLose(diceInfoLeft, diceInfoRight) {
    var resolution = document.getElementById("resolution");

    if (diceInfoLeft < diceInfoRight) {
        resolution.innerHTML = "You Lose!!!";
        resolution.style.color = "#c0392b";
    } else if (diceInfoLeft === diceInfoRight) {
        resolution.innerHTML = "Roll Again!"
        resolution.style.color = "#2980b9";
    } else {
        resolution.innerHTML = "You Win!"
        resolution.style.color = "#27ae60";
    }
}
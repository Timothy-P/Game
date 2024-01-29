var playerstatus;
var turn = "X";
var randomNum;
// Upper row
const UM = document.getElementById("UM")
const UR = document.getElementById("UR")
// Middle row
const MR = document.getElementById("MR")
const ML = document.getElementById("ML")
const MM = document.getElementById("MM")
// Bottom row
const BL = document.getElementById("BL")
const BM = document.getElementById("BM")
const BR = document.getElementById("BR")



function pageload() {
    var loadconf = window.confirm("Do you want to play with a friend?\n(Confirm for yes, Cancel for no.)")
    if (loadconf == 1) {
        playerstatus = 1
    }
    else {
        playerstatus = 0
    }    
};
//Array(OSpots);
//Array(XSpots);
function placeObject(event) {
    const element = event.target;
    if (playerstatus === 1) {
        if (turn == "X") {
            document.getElementById("turncount").textContent = "It is O\'s turn.";
            turn = "O";
            console.log(turn)
            if (element.textContent === "") {
                element.textContent = "X"
            }
            else {
                alert("You have chosen to skip your turn.\nPlease pick a valid square next time.")
            }
        }
        else {
            document.getElementById("turncount").textContent = "It is X\'s turn."
            turn = "X";
            console.log(turn)
            if (element.textContent === "") {
                element.textContent = "O"
            }
            else {
                alert("You have chosen to skip your turn.\nPlease pick a valid square next time.")
            }
        };
    }
    else {
        if (element.textContent === "") {
            element.textContent = "X";
            console.log(AI())
        }
        else {
            alert("You have chosen to skip your turn.\nPlease pick a valid square next time.")
        }
    }
    console.log(element)
};

function AI() {
    randomNum = getRandomInt(1, 9)
    if (randomNum === 1) {
        if (document.getElementById("UL").textContent === "") {
            document.getElementById("UL").textContent = "O";
            OSpots
        }
        else {
            AI()
        }
    }
    else if (randomNum === 2) {
        if (document.getElementById("UM").textContent === "") {
            document.getElementById("UM").textContent = "O"
            OSpot
        }
        else {
            AI()
        }
    }
    else if (randomNum === 3) {
        if (document.getElementById("UR").textContent === "") {
            document.getElementById("UR").textContent = "O";
            OSpots
        }
        else {
            AI()
        }
    }
    else if (randomNum === 4) {
        if (document.getElementById("ML").textContent === "") {
            document.getElementById("ML").textContent = "O";
            OSpots
        }
        else {
            AI()
        }
    }
    else if (randomNum === 5) {
        if (document.getElementById("MM").textContent === "") {
            document.getElementById("MM").textContent = "O";
            OSpots
        }
        else {
            AI()
        }
    }
    else if (randomNum === 6) {
        if (document.getElementById("MR").textContent === "") {
            document.getElementById("MR").textContent = "O";
            OSpots
        }
        else {
            AI()
        }
    }
    else if (randomNum === 7) {
        if (document.getElementById("BL").textContent === "") {
            document.getElementById("BL").textContent = "O";
            OSpots
        }
        else {
            AI()
        }
    }
    else if (randomNum === 8) {
        if (document.getElementById("BM").textContent === "") {
            document.getElementById("BM").textContent = "O";
            OSpots
        }
        else {
            AI()
        }
    }
    else if (randomNum === 9) {
        if (document.getElementById("BR").textContent === "") {
            document.getElementById("BR").textContent = "O";
            OSpots
        }
        else {
            AI()
        }
    }
    else {
        alert("Something has messed up. Please report this to me.")
        AI()
    }
    return randomNum
};
function winCon() {
    //I don't have anything yet, but be patient. I have a lot to work on.
}

// Perm stuff. I'm not gonna touch this any, if at all.
window.addEventListener("DOMContentLoaded", function() {
    pageload()
    document.getElementsByClassName("cell").innerHTML = ""
});
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max+1);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is inclusive and the minimum is inclusive
};
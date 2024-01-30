/*
Copyright 2023 Timothy-P

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

var playerstatus;
var turn = "X";
var randomNum;



function pageload() {
    var loadconf = window.confirm("Do you want to play with a friend?\n(Confirm for yes, Cancel for no.)")
    if (loadconf == 1) {
        playerstatus = 1
    }
    else {
        playerstatus = 0
    }    
};//
const OSpots = [];
const XSpots = [];
function placeObject(event) {
    const element = event.target;
    if (playerstatus === 1) {
        if (turn == "X") {
            document.getElementById("turncount").textContent = "It is O\'s turn.";
            turn = "O";
            console.log(turn)
            if (element.textContent === "") {
                element.textContent = "X"
                XSpots.push(element.id)
                console.log(XSpots)
                winCon(1)
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
                OSpots.push(element.id)
                console.log(OSpots)
                winCon(0)
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
            OSpots.push("UL")
            winCon(0)
        }
        else {
            AI()
        }
    }
    else if (randomNum === 2) {
        if (document.getElementById("UM").textContent === "") {
            document.getElementById("UM").textContent = "O"
            OSpot.push("UM")
            winCon(0)
        }
        else {
            AI()
        }
    }
    else if (randomNum === 3) {
        if (document.getElementById("UR").textContent === "") {
            document.getElementById("UR").textContent = "O";
            OSpots.push("UR")
            winCon(0)
        }
        else {
            AI()
        }
    }
    else if (randomNum === 4) {
        if (document.getElementById("ML").textContent === "") {
            document.getElementById("ML").textContent = "O";
            OSpots.push("ML")
            winCon(0)
        }
        else {
            AI()
        }
    }
    else if (randomNum === 5) {
        if (document.getElementById("MM").textContent === "") {
            document.getElementById("MM").textContent = "O";
            OSpots.push("MM")
            winCon(0)
        }
        else {
            AI()
        }
    }
    else if (randomNum === 6) {
        if (document.getElementById("MR").textContent === "") {
            document.getElementById("MR").textContent = "O";
            OSpots.push("MR")
            winCon(0)
        }
        else {
            AI()
        }
    }
    else if (randomNum === 7) {
        if (document.getElementById("BL").textContent === "") {
            document.getElementById("BL").textContent = "O";
            OSpots.push("BL")
            winCon(0)
        }
        else {
            AI()
        }
    }
    else if (randomNum === 8) {
        if (document.getElementById("BM").textContent === "") {
            document.getElementById("BM").textContent = "O";
            OSpots.push("BM")
            winCon(0)
        }
        else {
            AI()
        }
    }
    else if (randomNum === 9) {
        if (document.getElementById("BR").textContent === "") {
            document.getElementById("BR").textContent = "O";
            OSpots.push("BR")
            winCon(0)
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
function winCon(int) {
    if (int > 0) {
        if (XSpots.indexOf("UL") > -1 && XSpots.indexOf("UM") > -1 && XSpots.indexOf("UR") > -1) {
            console.log("X got the full top row.");
            setTimeout(reset(), 100)
        }
        else if (XSpots.indexOf("ML") > -1 && XSpots.indexOf("MM") > -1 && XSpots.indexOf("MR") > -1) {
            console.log("X got the full middle row.")
            alert("X has won.")
            setTimeout(reset(), 100)
        }
        else if (XSpots.indexOf("BL") > -1 && XSpots.indexOf("BM") > -1 && XSpots.indexOf("BR") > -1) {
            console.log("X got the full middle row.")
            alert("X has won.")
            setTimeout(reset(), 100)
        }
        else if (XSpots.indexOf("UL") > -1 && XSpots.indexOf("MM") > -1 && XSpots.indexOf("BR") > -1) {
            console.log("X got a diagonal win. (UL, MM, BR)")
            alert("X has won.")
            setTimeout(reset(), 100)
        }
        else if (XSpots.indexOf("BL") > -1 && XSpots.indexOf("MM") > -1 && XSpots.indexOf("UR") > -1) {
            console.log("X got a diagonal win. (BL, MM, UR)")
            alert("X has won.")
            setTimeout(reset(), 100)
        }
        else if (XSpots.indexOf("UL") > -1 && XSpots.indexOf("ML") > -1 && XSpots.indexOf("BL") > -1) {
            console.log("X got a full colomn.")
            alert("X has won.")
            setTimeout(reset(), 100)
        }
        else if (XSpots.indexOf("UM") > -1 && XSpots.indexOf("MM") > -1 && XSpots.indexOf("BM") > -1) {
            console.log("X got a full colomn.")
            alert("X has won.")
            setTimeout(reset(), 100)
        }
        else if (XSpots.indexOf("UR") > -1 && XSpots.indexOf("MR") > -1 && XSpots.indexOf("BR") > -1) {
            console.log("X got a full colomn.")
            alert("X has won.")
            setTimeout(reset(), 100)
        }
        else {
            console.log("No one has won yet.")
        }
    }
    else {
        if (OSpots.indexOf("UL") > -1 && OSpots.indexOf("UM") > -1 && OSpots.indexOf("UR") > -1) {
            console.log("O got the full top row.");
            alert("O has won.");
            setTimeout(reset(), 100)
        }
        else if (OSpots.indexOf("ML") > -1 && OSpots.indexOf("MM") > -1 && OSpots.indexOf("MR") > -1) {
            console.log("O got the full middle row.")
            alert("O has won.")
            setTimeout(reset(), 100)
        }
        else if (OSpots.indexOf("BL") > -1 && OSpots.indexOf("BM") > -1 && OSpots.indexOf("BR") > -1) {
            console.log("O got the full middle row.")
            alert("O has won.")
            setTimeout(reset(), 100)
        }
        else if (OSpots.indexOf("UL") > -1 && OSpots.indexOf("MM") > -1 && OSpots.indexOf("BR") > -1) {
            console.log("O got a diagonal win. (UL, MM, BR)")
            alert("O has won.")
            setTimeout(reset(), 100)
        }
        else if (OSpots.indexOf("BL") > -1 && OSpots.indexOf("MM") > -1 && OSpots.indexOf("UR") > -1) {
            console.log("O got a diagonal win. (BL, MM, UR)")
            alert("O has won.")
            setTimeout(reset(), 100)
        }
        else if (OSpots.indexOf("UL") > -1 && OSpots.indexOf("ML") > -1 && OSpots.indexOf("BL") > -1) {
            console.log("O got a full colomn.")
            alert("O has won.")
            setTimeout(reset(), 100)
        }
        else if (OSpots.indexOf("UM") > -1 && OSpots.indexOf("MM") > -1 && OSpots.indexOf("BM") > -1) {
            console.log("O got a full colomn.")
            alert("O has won.")
            setTimeout(reset(), 100)
        }
        else if (OSpots.indexOf("UR") > -1 && OSpots.indexOf("MR") > -1 && OSpots.indexOf("BR") > -1) {
            console.log("O got a full colomn.")
            alert("O has won.")
            setTimeout(reset(), 100)
        }
        else {
            console.log("No one has won yet.")
        }
    }

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
function reset() {
    conf = window.confirm("Do you want to play again?")
    if (conf == true) {
        document.getElementById("UL").textContent = "";
        document.getElementById("UM").textContent = "";
        document.getElementById("UR").textContent = "";
        document.getElementById("ML").textContent = "";
        document.getElementById("MM").textContent = "";
        document.getElementById("MR").textContent = "";
        document.getElementById("BL").textContent = "";
        document.getElementById("BM").textContent = "";
        document.getElementById("BR").textContent = "";
        while (XSpots.length != 0) {
            XSpots.pop()
        };
        while (OSpots.length != 0) {
            OSpots.pop()
        };
        console.log("Game board reset.");
    }
    else {
        console.log("Game not resetted.")
    }
};
var XScore = 0;
var OScore = 0;
function Score(str) {
    if (str === "X") {
        XScore += 1;
        console.log("X's score: "+XScore);
    }
    else if (str === "O") {
        OScore += 1;
        console.log("O's score: "+OScore);
    }
    else {
        alert("Stop inflating your score. I'll reset the page if you don't.");
        console.error("Leave my stuff alone, you human. And, don't poke at other's functions.")
    }
};

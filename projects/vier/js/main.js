let player1Name;
let player2Name;
let toggle = false;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let firstArrowIndex = 35
let secondArrowIndex = 36
let thirdArrowIndex = 37
let fourthArrowIndex = 38
let fifthArrowIndex = 39
let sixthArrowIndex = 40
let seventhArrowIndex = 41
let playerTurn = 0;//alle variabelen
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const explanationButton = document.querySelector(".explanation-button");
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const arrow3 = document.querySelector(".arrow3");
const arrow4 = document.querySelector(".arrow4");
const arrow5 = document.querySelector(".arrow5");
const arrow6 = document.querySelector(".arrow6");
const arrow7 = document.querySelector(".arrow7");
const audioPLacer = document.querySelector(".audios")
const boxes = document.querySelectorAll(".box");
const startButton = document.querySelector(".start-button");
const firstEasterEgg = document.querySelector(".first-easter-egg");
const secondEasterEgg = document.querySelector(".second-easter-egg");
const thirdEasterEgg = document.querySelector(".third-easter-egg");//alle queryselectors
//1 = rood / 0 = geel

console.log(boxes.innerHTML)
const winningCombinations = [
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
    [8, 9, 10, 12],
    [9, 10, 11, 12],
    [10, 11, 12, 13],
    [14, 15, 16, 17],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [24, 25, 26, 27],
    [28, 29, 30, 31],
    [29, 30, 31, 32],
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [35, 36, 37, 38],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [14, 21, 28, 35],
    [36, 29, 22, 15],
    [29, 22, 15, 8],
    [22, 15, 8, 1],
    [37, 30, 23, 16],
    [30, 23, 16, 9],
    [23, 16, 9, 2],
    [38, 31, 24, 17],
    [31, 24, 17, 10],
    [24, 17, 10, 3],
    [39, 32, 25, 18],
    [32, 25, 18, 11],
    [25, 18, 11, 4],
    [40, 33, 26, 19],
    [33, 26, 19, 12],
    [26, 19, 12, 5],
    [41, 34, 27, 20],
    [34, 27, 20, 13],
    [27, 20, 13, 6],
    [42, 35, 28, 21],
    [35, 28, 21, 14],
    [28, 21, 14, 7]
];//de wincombinaties

function askPlayer1Name() {
    let player1Name = prompt("Vul uw naam in.");
    player1.innerHTML = player1Name;
}//de function voor de naam van speler 1
function askPlayer2Name() {
    player2Name = prompt("Vul uw naam in.");
    player2.innerHTML = player2Name;
}//de function voor de naam van speler 2
function explanation() {
    alert("Welkom bij vier op een rij!");
    alert("De bedoeling is om vier stenen van jouw eigen kleur, dit kan rood of geel zijn, op één rij te krijgen.");
    alert(" Hoe deze rij tot stand komt maakt niet, dit kan verticaal zijn of horizontaal en diagonaal.");
    alert("De spelers zijn om beurten aan zet.");
    alert("Speler 1 is rood.");
    alert("Speler 2 is geel.");
    audioPLacer.innerHTML = '<audio hidden autoplay><source src="audio/Rick Astley - Never Gonna Give You Up (Official Music Video).mp3"></audio>';
    return;
}
function startGame() {
    audioPLacer.innerHTML = '<audio hidden autoplay loop><source src="audio/Eric Cartman - Poker Face (Rock Band Version, HQ digitally recorded).mp3"></audio>';
    return;
}//de function die de achtergrond muziek toevoegd
function clickFirstEasterEgg(){
    audioPLacer.innerHTML = '<audio hidden autoplay>,<source src="audio/Mario Ching Chong.mp3"></audio>'
}
function clickSecondEasterEgg(){
    audioPLacer.innerHTML = '<audio hidden autoplay><source src="audio/JonTron _WTF_.mp3"></audio>'
}
function clickThirdEasterEgg(){
    audioPLacer.innerHTML = '<audio hidden autoplay><source src="audio/Can I put my balls in yo jaws original video.mp3"></audio>'
}//alle functions voor de easter eggs
function clickArrow1() {
    console.log('op pijl 1 geklikt: ',);

    if (firstArrowIndex >= 0) {
        if (toggle) {
            boxes[firstArrowIndex].innerHTML = '<img src="images/yellow dot.png">';
        } else {
            boxes[firstArrowIndex].innerHTML = '<img src="images/red dot.png">';
        }
        toggle = !toggle;
        firstArrowIndex = firstArrowIndex - 7
        playAudio()
        checkForTurn();
        checkForWin();

        return firstArrowIndex;

    } else {
        alert("deze rij is vol")
    }

}
function clickArrow2() {

    console.log('op pijl 2 geklikt: ',);
    if (secondArrowIndex >= 1) {
        if (toggle) {
            boxes[secondArrowIndex].innerHTML = '<img src="images/yellow dot.png">';
        } else {
            boxes[secondArrowIndex].innerHTML = '<img src="images/red dot.png">';
        }

        secondArrowIndex = secondArrowIndex - 7
        toggle = !toggle;
        playAudio()
        checkForTurn();
        checkForWin()
        return secondArrowIndex;

    } else {
        alert("deze rij is vol");
    }

}
function clickArrow3() {

    console.log('op pijl 3 geklikt: ',);
    if (thirdArrowIndex >= 2) {
        if (toggle) {
            boxes[thirdArrowIndex].innerHTML = '<img src="images/yellow dot.png">';
        } else {
            boxes[thirdArrowIndex].innerHTML = '<img src="images/red dot.png">';
        }

        thirdArrowIndex = thirdArrowIndex - 7
        toggle = !toggle;
        playAudio()
        checkForTurn();
        checkForWin()
        return thirdArrowIndex;

    } else {
        alert("deze rij is vol")
    }

}
function clickArrow4() {

    console.log('op pijl 4 geklikt: ',);
    if (fourthArrowIndex >= 3) {
        if (toggle) {
            boxes[fourthArrowIndex].innerHTML = '<img src="images/yellow dot.png">';
        } else {
            boxes[fourthArrowIndex].innerHTML = '<img src="images/red dot.png">';
        }

        fourthArrowIndex = fourthArrowIndex - 7
        toggle = !toggle;
        playAudio()
        checkForTurn();
        checkForWin()
        return fourthArrowIndex;

    } else {
        alert("deze rij is vol")
    }

}
function clickArrow5() {

    console.log('op pijl 5 geklikt: ',);
    if (fifthArrowIndex >= 4) {
        if (toggle) {
            boxes[fifthArrowIndex].innerHTML = '<img src="images/yellow dot.png">';
        } else {
            boxes[fifthArrowIndex].innerHTML = '<img src="images/red dot.png">';
        }

        fifthArrowIndex = fifthArrowIndex - 7
        toggle = !toggle;
        playAudio()
        checkForTurn();
        checkForWin()
        return fifthArrowIndex;

    } else {
        alert("deze rij is vol")
    }

}
function clickArrow6() {

    console.log('op pijl 6 geklikt: ',);
    if (sixthArrowIndex >= 5) {
        if (toggle) {
            boxes[sixthArrowIndex].innerHTML = '<img src="images/yellow dot.png">';
        } else {
            boxes[sixthArrowIndex].innerHTML = '<img src="images/red dot.png">';
        }

        sixthArrowIndex = sixthArrowIndex - 7
        toggle = !toggle;
        playAudio()
        checkForTurn();
        checkForWin()
        return sixthArrowIndex;

    } else {
        alert("deze rij is vol")
    }

}
function clickArrow7() {

    console.log('op pijl 7 geklikt: ',);
    if (seventhArrowIndex >= 6) {
        if (toggle) {
            boxes[seventhArrowIndex].innerHTML = '<img src="images/yellow dot.png">';
        } else {
            boxes[seventhArrowIndex].innerHTML = '<img src="images/red dot.png">';
        }

        seventhArrowIndex = seventhArrowIndex - 7
        toggle = !toggle;
        checkForTurn();
        playAudio();
        checkForWin()
        return seventhArrowIndex;

    } else {
        alert("deze rij is vol")
    }

}
//alle functions voor de pijlen
function checkForWin() {
    for (let i = 0; i < winningCombinations.length; i++) {
        let row = winningCombinations[i]
        let position_a = row[0]
        let position_b = row[1]
        let position_c = row[2]
        let position_d = row[3]

        if (boxes[row[0]].innerHTML == "" && boxes[row[1]].innerHTML == "" && boxes[row[2]].innerHTML == "" && boxes[row[3]].innerHTML == "") {
            continue;
        } else if (boxes[row[0]].innerHTML == boxes[row[0]].innerHTML && boxes[row[0]].innerHTML == boxes[row[0]].innerHTML && boxes[row[0]].innerHTML == boxes[row[3]].innerHTML && boxes[row[3]].innerHTML == '<img src="images/red dot.png">') {
            scorePlayer1 = scorePlayer1 + 1;
            console.log('winnende situatie');
            setTimeout(() => {
                alert(`gefeliciteerd ${player1Name} heeft gewonnen`);
            }, "10")
            checkIfClickable = true;

        } else if (boxes[row[0]].innerHTML == boxes[row[1]].innerHTML && boxes[row[1]].innerHTML == boxes[row[2]].innerHTML && boxes[row[2]].innerHTML == boxes[row[3]].innerHTML && boxes[row[3]].innerHTML == '<img src="images/yellow dot.png">') {
            scorePlayer2 = scorePlayer2 + 1
            console.log('winnende situatie');
            setTimeout(() => {
                alert(`gefeliciteerd ${player2Name} heeft gewonnen`);//zorgt dat je kan zien wie er gewonnen heeft voordat je het bericht krijgt
            }, "10")
            checkIfClickable = true;

        }
    }
}//de winconditie die niet perfect werkt

function checkForTurn() {
    if (playerTurn == 1) {
        arrow1.classList.add("arrow-red-background");
        arrow1.classList.remove("arrow-yellow-background");
        arrow2.classList.add("arrow-red-background");
        arrow2.classList.remove("arrow-yellow-background");
        arrow3.classList.add("arrow-red-background");
        arrow3.classList.remove("arrow-yellow-background");
        arrow4.classList.add("arrow-red-background");
        arrow4.classList.remove("arrow-yellow-background");
        arrow5.classList.add("arrow-red-background");
        arrow5.classList.remove("arrow-yellow-background");
        arrow6.classList.add("arrow-red-background");
        arrow6.classList.remove("arrow-yellow-background");
        arrow7.classList.add("arrow-red-background");
        arrow7.classList.remove("arrow-yellow-background");
        playerTurn = playerTurn - 1;
        return playerTurn;
    } else if (playerTurn == 0) {
        arrow1.classList.add("arrow-yellow-background");
        arrow1.classList.remove("arrow-red-background");
        arrow2.classList.add("arrow-yellow-background");
        arrow2.classList.remove("arrow-red-background");
        arrow3.classList.add("arrow-yellow-background");
        arrow3.classList.remove("arrow-red-background");
        arrow4.classList.add("arrow-yellow-background");
        arrow4.classList.remove("arrow-red-background");
        arrow5.classList.add("arrow-yellow-background");
        arrow5.classList.remove("arrow-red-background");
        arrow6.classList.add("arrow-yellow-background");
        arrow6.classList.remove("arrow-red-background");
        arrow7.classList.add("arrow-yellow-background");
        arrow7.classList.remove("arrow-red-background");
        playerTurn = playerTurn + 1;
        return playerTurn;
    }
}//hier word gekeken wie er aan de beurt is
function playAudio() {
    audioPLacer.innerHTML += '<audio><source src="audio/fat asian guy laughing.mp3"></audio>'
    return;
}//hier word het achtergrondgeluid afgespeeld


arrow1.addEventListener("click", clickArrow1);
arrow2.addEventListener("click", clickArrow2);
arrow3.addEventListener("click", clickArrow3);
arrow4.addEventListener("click", clickArrow4);
arrow5.addEventListener("click", clickArrow5);
arrow6.addEventListener("click", clickArrow6);
arrow7.addEventListener("click", clickArrow7);
player1.addEventListener("click", askPlayer1Name);
player2.addEventListener("click", askPlayer2Name);
explanationButton.addEventListener("click", explanation);
startButton.addEventListener("click", startGame);
firstEasterEgg.addEventListener("click", clickFirstEasterEgg);
secondEasterEgg.addEventListener("click", clickSecondEasterEgg);
thirdEasterEgg.addEventListener("click", clickThirdEasterEgg);//alle eventlisteners
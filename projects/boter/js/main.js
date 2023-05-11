let player1Name = undefined;
let player2Name = undefined;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let checkIfClickable = false;
let toggle = false;//alle variabelen
const returnButton = document.querySelector(".return");
const resetButton = document.querySelector(".reset");
const boxes = document.querySelectorAll('.box');
const scoreBoard = document.querySelector(".scoreboard");
const scoreButton = document.querySelector(".score-button");
const explanationButton = document.querySelector(".explanation-button");//alle queryselectors
const winningCombinations = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]];//alle wincombinaties

function askPlayer1Name() {
    player1Name = prompt('Vul uw naam in.');
    localStorage.setItem("player1Name", "0");
    const displayPlayerName = document.querySelector('.player1');
    displayPlayerName.textContent = player1Name;
    window.localStorage.setItem(player1Name, scorePlayer1)
}//dit vraagt voor de naam van speler 1

function askPlayer2Name() {
    player2Name = prompt('vul uw naam in.');
    localStorage.setItem("player2Name", "0");
    const displayplayername = document.querySelector('.player2');
    displayplayername.textContent = player2Name;
    window.localStorage.setItem(player2Name, scorePlayer2);
}//dit vraagt voor de naam van speler 2





boxes.forEach(box => {
    box.addEventListener('click', function (i) {
        if(checkIfClickable){
            return;
        }//zorgt dat je niet meer kan klikken
        if (box.textContent != "") {
            alert('Dit blok is bezet. Kies een ander.');
            return;
        } //zorgt dat je niet een op hetzelfde blokje kan klikken

        console.log('op blok geklikt: ', i.target);

        if (toggle) {
            i.target.textContent = "O";
        } else {
            i.target.textContent = "X";
        }

        checkForWin(i.target)

        toggle = !toggle;
    });
})

function checkForWin(target) {
    for (let i = 0; i < winningCombinations.length; i++) {
        const row = winningCombinations[i];

        const position_a = row[0];
        const position_b = row[1];
        const position_c = row[2];

        const box_a = boxes[position_a];
        const box_b = boxes[position_b];
        const box_c = boxes[position_c];



        if (box_a.textContent == "" || box_b.textContent == "" || box_c.textContent == "") {
            continue;
        } else if ( box_a.textContent == box_b.textContent&& box_b.textContent ==  box_c.textContent && box_c.textContent=="O") {
            scorePlayer2 = scorePlayer2 + 1
            console.log('winnende situatie');
            setTimeout(()=>{
            alert(`gefeliciteerd ${player2Name} heeft gewonnen`);//zorgt dat je kan zien wie er gewonnen heeft voordat je het bericht krijgt
        },"10")
        checkIfClickable = true;


        } else if ( box_a.textContent == box_b.textContent&& box_b.textContent ==  box_c.textContent && box_c.textContent=="X") {
            scorePlayer1 = scorePlayer1 + 1;
            console.log('winnende situatie');
            setTimeout(()=>{
            alert(`gefeliciteerd ${player1Name} heeft gewonnen`);
        },"10")
        checkIfClickable = true;
        

        } else {
            console.log('3 blokken geklikt')
        }
    }
}

function returnToHome() {
    window.location.href = 'homepage.html'
}//de function die word gebruikt om je terug naar de homepage te sturen

function resetBoxes() {
    checkIfClickable = false;
    boxes.forEach(boxes => {
        boxes.textContent = "";
    })
}//de function die alle blokjes leeg maakt

function printScore(){
    const printPlayer1Score = window.localStorage.getItem(player1Name);
    const printPlayer2Score = window.localStorage.getItem(player2Name);
    for(let i = 0; i< localStorage.length; i++){
        scoreBoard.innerHTML = player1Name + " " + scorePlayer1 + "<br>"+ player2Name + " " + scorePlayer2;
    }
}//dit print de score op het


function explanation(){
    alert("Eén speler moet een kruis op leeg een veld tekenen, de andere speler een bolletje.");
    alert("Om beurten plaatsen de spelers hun symbool op een leeg veld.");
    alert("Degene die drie van zijn eigen tekens op een rij heeft, dat mag horizontaal, verticaal of diagonaal zijn, heeft gewonnen.");
    alert("Speler 1 is het kruisje");
    alert("speler 2 is het bolletje");
}//in deze function word de uitleg van het spel gegeven

explanationButton.addEventListener("click", explanation);
resetButton.addEventListener("click", resetBoxes);
returnButton.addEventListener("click", returnToHome);
scoreButton.addEventListener("click", printScore);
//alle eventlisteners
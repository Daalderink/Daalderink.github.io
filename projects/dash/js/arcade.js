console.log(`Javascript Loaded`);
const cadeyBotAnswer = document.querySelector(`.cadey-bot-answer`);
const inputQuestion = document.querySelector(`.input-question`);
const historyButton = document.querySelector(`.history-button`);
const popularityButton = document.querySelector(`.popularity-button`);
const genreButton = document.querySelector(`.genre-button`);
const enginButton = document.querySelector(`.engin-button`);
const companyButton = document.querySelector(`.company-button`);
const speedrunButton = document.querySelector(`.speedrun-button`);
const infoButton = document.querySelector(`.info-button`);
const opinionButton = document.querySelector(`.opinion-button`);
const homeButton = document.querySelector(`.home-button`);


historyButton.addEventListener("click", historyAnswer);
popularityButton.addEventListener("click", popularityAnswer);
genreButton.addEventListener("click" ,genreAnswer);
enginButton.addEventListener("click", enginAnswer);
companyButton.addEventListener("click", companyAnswer);
speedrunButton.addEventListener("click", speedrunAnswer);
infoButton.addEventListener("click", infoAnswer);
opinionButton.addEventListener("click", opinionAnswer);
homeButton.addEventListener("click", returnButton);

function historyAnswer() {
    inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Vertel  me iets over de Geschiedenis van arcade games?</div>`;
    cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 col-md-6 chatbox-text">Het begon allemaal met de Penny Arcade, een speelhal met apparaten waar je zelf een centje in gooide om te kunnen spelen. Het principe ontstond tussen de 1905 en 1910</div>`;
}
function popularityAnswer() {
    inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Vertel me iets over de Populariteit?</div>`
    cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 col-md-6 chatbox-text">De populairste spellen uit die tijd waren: Space Invaders (1978), Pac-Man (1980), Donkey Kong (1981) en Tetris (1983).</div>`;
}
function genreAnswer() {
    inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Vertel me iets over de Soorten Arcade games?</div>`
    cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 col-md-6 chatbox-text">Je hebt shooters games, Puzzle games, Horror games, Strategie games en meer....</div>`;
}
function enginAnswer() {
    inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Welke arcade engins kan ik gebruiken?</div>`
    cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 col-md-6 chatbox-text">api.arcade.academy.com<br>arcade.makecode.com</div>`;
}
function companyAnswer() {
    inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Welke arcade bedrijven zijn er?</div>`
    cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 col-md-6 chatbox-text">Nintendo<br>Sega<br>Bandai Namco<br>Atari<br>Taito Corporation<br>Enz...</div>`;
}
function speedrunAnswer() {
    inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Wie is de meest bekende speedrunner?</div>`
    cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 col-md-6 chatbox-text">Billy Michell is de meest bekende arcade speedrunner. Hoewel hij ook gezien is als de meest bekende vals speler.</div>`;
}
function infoAnswer() {
    inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Wat is een arcade game precies?</div>`
    cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 col-md-6 chatbox-text">Een arcadespel, ook wel speelkast of speelautomaat genoemd, is een muntslikkende vermaakmachine die men vroeger veelvuldig in restaurants, cafés, snackbars, speelhallen en andere vermaakscentra vond. Ook op kermissen waren kramen te vinden waar arcadespellen konden worden gespeeld.</div>`;
}
function opinionAnswer() {
    inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Wat is jou favorite arcade game</div>`
    cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 col-md-6 chatbox-text">Tetris. Het spel heeft een leuk bekend thema en het geeft mij een beter gevoel elke keer wanneer ik de muziek hoor spelen.</div>`;
}
function returnButton() {
    inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Ik heb geen vragen meer</div>`
    cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 col-md-6 chatbox-text">Ik hoop dat ik u heb kunnen helpen.<br><a href="/home.html">Terug naar de home</a></div>`;

}
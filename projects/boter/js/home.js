//dit bestand is aangemaakt om de speelknop werkend te maken met een eventlistener en geen onclick
const playButton = document.querySelector(".play-button");

function goToGame(){
    window.location.href = "pvp.html";
}

playButton.addEventListener("click", goToGame);
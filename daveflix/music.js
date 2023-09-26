const dump = document.querySelector('.music')

fetch(`/daveflix/music.json`)
.then(myData => myData.json())
.then(jsonData => showmusic(jsonData))

function showmusic(data){
    for (let index = 0; index < data.music.length; index++) {
        const song = data.music[index];
        dump.innerHTML += `<div class="col-md-3 pb-4"><div class="card">
            <img class="card-img-top" src="${song.albumimg}" alt="Title">
            <div class="card-body">
                <h4 class="card-title">${song.title}</h4>
                <p class="card-text">franchise: ${song.releaseyear}<br>
                duur: ${song.artist}<br>
                <a href="${song.link}"><button>bekijken</button></a>
                </p>
            </div>
        </div></div>`
    }
}
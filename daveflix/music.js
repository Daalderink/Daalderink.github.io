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
                <p class="card-text">uitgebracht in: ${song.releaseyear}<br>
                artiest: ${song.artist}<br>
                album: ${song.album}<br>
                <audio controls>
                    <source src='${song.link}' type='audio/mpeg'>
                </audio>
                </p>
            </div>
        </div></div>`
    }
}
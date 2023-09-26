const dump = document.querySelector('.movies')
const showDump = document.querySelector(".tv-shows")
const musicDump = document.querySelector(".music")
let randomNumber = Math.floor(Math.random() * 10);
fetch(`/daveflix/movies.json`)
.then(myData => myData.json())
.then(jsonData => showMovies(jsonData))

fetch(`/daveflix/tv-shows.json`)
.then(myData => myData.json())
.then(jsonData => showShows(jsonData))

fetch(`/daveflix/music.json`)
.then(myData => myData.json())
.then(jsonData => showMusic(jsonData))

function showMovies(data){
    for (let index = 0; index < data.movies.length; index++) {
        const movie = data.movies[index];
        if(index < 4){
            dump.innerHTML += `<div class="col-md-3 pb-4"><div class="card">
            <img class="card-img-top" src="${movie.bannerimg}" alt="Title">
            <div class="card-body">
                <h4 class="card-title">${movie.title}</h4>
                <p class="card-text">franchise: ${movie.franchise}<br>
                duur: ${movie.length}<br>
                <a href="${movie.link}"><button>bekijken</button></a>
                </p>
            </div>
        </div></div>`
        }
        
    }
}

function showShows(data){
    for (let index = 0; index < data.shows.length; index++) {
        const show = data.shows[index];
        if(index < 4){
            showDump.innerHTML += `<div class="col-md-3 pb-4"><div class="card">
            <img class="card-img-top" src="${show.bannerimg}" alt="Title">
            <div class="card-body">
                <h4 class="card-title">${show.title}</h4>
                <p class="card-text">franchise: ${show.franchise}<br>
                seizoenen: ${show.seasons}<br>
                afleveringen: ${show.episodes}<br>
                <a href="${show.episodes}"><button>bekijken</button></a>
                </p>
            </div>
        </div></div>`
        }
        
    }
}

function showMusic(data){
    for (let index = 0; index < data.music.length; index++) {
        const song = data.music[index];
        if(index < 4){
            musicDump.innerHTML += `<div class="col-md-3 pb-4"><div class="card">
            <img class="card-img-top" src="${song.albumimg}" alt="Title">
            <div class="card-body">
                <h4 class="card-title">${song.title}</h4>
                <p class="card-text">uitgebracht in: ${song.releaseyear}<br>
                artiest: ${song.artist}<br>
                album: ${song.album}<br>
                <a href="${song.link}"><button>beluisteren</button></a>
                </p>
            </div>
        </div></div>`
        }
        
    }
}
const showDump = document.querySelector(".shows")

fetch(`/daveflix/tv-shows.json`)
.then(myData => myData.json())
.then(jsonData => showShows(jsonData))

function showShows(data){
    for (let index = 0; index < data.shows.length; index++) {
        const show = data.shows[index];
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
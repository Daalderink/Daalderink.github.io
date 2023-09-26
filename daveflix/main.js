const dump = document.querySelector('.movies')

fetch(`/daveflix/movies.json`)
.then(myData => myData.json())
.then(jsonData => showMovies(jsonData))

function showMovies(data){
    for (let index = 0; index < data.movies.length; index++) {
        const movie = data.movies[index];
        if(index < 4){
            dump.innerHTML += `<div class="col-md-3"><div class="card">
            <img class="card-img-top" src="${movie.bannerimg}" alt="Title">
            <div class="card-body">
                <h4 class="card-title">${movie.name}</h4>
                <p class="card-text">franchise: ${movie.franchise}<br>
                duur: ${movie.length}<br>
                <a href="${movie.link}"><button>bekijken</button></a>
                </p>
            </div>
        </div></div>`
        } else {
            break
        }
        
    }
}
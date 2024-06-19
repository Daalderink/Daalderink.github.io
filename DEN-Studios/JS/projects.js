const container = document.querySelector('.dump');


fetch('/DEN-Studios/Data/projects.json')
    .then(myData => myData.json())
    .then(jsonData => showOnPage(jsonData))



function showOnPage(data) {
    
    for (let i = 0; i < data.projects.length; i++) {
        const project = data.projects[i]
        
        container.innerHTML += `<div class="col-md-4">
            <div class="card">
                <img class="card-img-top" src="` + project.img + `" alt="Title" />
                <div class="card-body">
                    <h4 class="card-title">` + project.title + `</h4>
                    <p class="card-text">` + project.description + `</p>
                    <p class="card-text">version: ` + project.version + `</p>
                    <p class="card-text">Release date: ` + project.releasedate + `</p>
                    <a href="` + project.link + `"><button class="btn btn-danger">Link</button></a>
                </div>
            </div>
        </div>`
        console.log(project.title)
    }
    console.log('for loop gedaan')
}


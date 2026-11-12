const container = document.querySelector('.dump');


fetch('/DEN-Studios/Data/socials.json')
    .then(myData => myData.json())
    .then(jsonData => showOnPage(jsonData))



function showOnPage(data) {
    
    for (let i = 0; i < data.socials.length; i++) {
        const project = data.socials[i]
        
        container.innerHTML += `<div class="col-md-4">
            <div class="card">
                <img class="card-img-top" src="` + project.logo + `" title="${project.platform} logo" alt="${project.platform} logo" />
                <div class="card-body">
                    <h4 class="card-title">` + project.platform + `</h4>
                    <p class="card-text">` + project.description + `</p>
                    <a href="` + project.url + `"><button class="btn btn-danger">Link</button></a>
                </div>
            </div>
        </div>`
        console.log(project.platform)
    }
    console.log('for loop gedaan')
}


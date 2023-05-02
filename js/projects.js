const projects = [
    {
        title: "Hoger Lager",
        description: "Je moet raden of je hoger of lager zal gooien dan de tegenspeler.",
        imgURL: "https://www.koraalmedia.nl//km_files/koraalmedia_uploads/91883927_2528446960741791_5452484248109842432_n.jpg"
    },{
        title: "The Joy Of Creation Remake",
        description: "Ik ben bezig om de horror game 'The Joy Of Creation' na te maken in mijn eigen stijl.",
        imgURL: "https://steamuserimages-a.akamaihd.net/ugc/942811960710688826/B38E02DC75520DB1BBAAFC0FD49E29AC9CE8FC3B/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },{
        title: "Slender: The Missing Soul",
        description: "Ik ben voor het keuzedeel gamedesign bezig om een videogame te maken. Ik werk hier dan samen in een groep.",
    }
]

const showroom = document.querySelector(".showroom")

for (let index = 0; index < projects.length; index++) {
    const project = projects[index];
    
    const card = `<div class="col-md-4"></><div class="card">
        <img class="card-img-top" src="${project.imgURL}" alt="Title">
        <div class="card-body">
            <h4 class="card-title">${project.title}</h4>
            <p class="card-text">${project.description}</p>
        </div>
    </div>
    </div>`
    showroom.innerHTML += card
}
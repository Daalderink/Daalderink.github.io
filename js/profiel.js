const profile = {
    userName: "David Aalderink",
    biography: "Ik ben een jongen van 17 die het leuk vind om te programmeren. Gamen vind ik ook erg leuk om te doen",
    email: "david@aalderink.nl",
    birthDate: "19-7-2005",
    pfp: "https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg",
    projects: [
        {
            title: "hoger lager",
            description: "een spel waarbij je moet kiezen of je hoger of lager dan de computer gooit",
            lastWorkedOn: "26-10-2022",
            image:"https://www.koraalmedia.nl//km_files/koraalmedia_uploads/91883927_2528446960741791_5452484248109842432_n.jpg",
            teamMate1:{
                fullName:"Emiel van Velzen",
                link: "https://evanvelzen.github.io"
            },
            teamMate2: {
                fullName: "Nathan Alberto",
                link: "https://n1alberto.github.io"
            }
        },
        {
            title: "tic tac toe",
            description: "AKA Boter Kaas en Eieren",
            lastWorkedOn: "12-1-2023",
            image: "https://media.s-bol.com/Y7lX5g67KQ2Y/550x363.jpg",
            teamMate1:{
                fullName:"Emiel van Velzen",
                link: "https://evanvelzen.github.io"
            },
            teamMate2: {
                fullName: "Nathan Alberto",
                link: "https://n1alberto.github.io"
            }
            
        },
        {
            title: "webcatalogus",
            description: "Een webpagina waar je allemaal dingen kan kopen.",
            lastWorkedOn: "",
            image: "https://wms.flexious.be/editor/plugins/imagemanager/content/2188/cases/eurojoe/cases-page_EuroJoe.jpg",
            teamMate1:{
                fullName:"Emiel van Velzen",
                link: "https://evanvelzen.github.io"
            },
            teamMate2: {
                fullName: "Nathan Alberto",
                link: "https://n1alberto.github.io"
            }
        }
    ],
    courses: "Software Developer",
    bannerColor: "rgb(155,0,0)",
    abilities: ["JS programmeur", "HTML kenner", "BS5 professional", "CSS ", "Story gamer"],
    socials: [{
        title : "Instagram",
        URL: "https://www.instagram.com/daalderink16/",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
    },{
        title : "Steam",
        URL: "https://steamcommunity.com/id/Daalderink/",
        imgURL: "https://cdn.freebiesupply.com/images/large/2x/steam-logo-transparent.png"
    },{
        title : "YouTube",
        URL: "https://www.youtube.com/channel/UCrrpfd5y9u_qW63zGhsXiDg",
        imgURL: "https://cdn-icons-png.flaticon.com/512/3670/3670147.png"
    }]
};
console.log(profile.projects.teamMates);

const myUsername = document.querySelector(".my-username");
const myPfp = document.querySelector(".profile-picture");
const email = document.querySelector(".email");
const abilities = document.querySelector(".abilities");
const projects = document.querySelector(".projects");
const banner = document.querySelector(".banner");
const birthDate = document.querySelector(".birth-date");
const biography = document.querySelector(".biography");
const courses = document.querySelector(".courses")
myUsername.innerHTML = profile.userName
myPfp.innerHTML = '<img class="image-fluid rounded-circle small" src="' + profile.pfp + '" alt="">'
email.innerHTML = profile.email
banner.style.backgroundColor = profile.bannerColor
birthDate.textContent = profile.birthDate
biography.textContent = profile.biography
courses.textContent = "opleidingen die ik heb gevolgd: " + profile.courses
const socials = document.querySelector(".socials")

for (let index = 0; index < profile.abilities.length; index++) {
    const abilitie = profile.abilities[index];
    abilities.innerHTML += abilitie + "<br>"
}

for (let index = 0; index < profile.projects.length; index++) {
    const project = profile.projects[index]; 
   
    const card = 
    `<div class="col-md-4 d-flex align-items-stretch"><div class="card d-flex align-items-stretch">
        <img class="card-img-top img-fluid" src="` + project.image +`" alt="Title">
        <div class="card-body">
            <h4 class="card-title">` + project.title + `</h4>
            <p class="card-text">` + project.description +`</p>
            <p class="card-text"> last worked on: ` + project.lastWorkedOn +`</p>
            <p class="card-text"> team mates : <a class+"text-decoration-none" href="`+ project.teamMate1.link +`">` + project.teamMate1.fullName + `</a>, <a class+"text-decoration-none" href="` + project.teamMate2.link + `">` + project.teamMate2.fullName + `</a> </p>
        </div>
    </div></div>`
    projects.innerHTML += card
}
for (let index = 0; index < profile.socials.length; index++) {
    const social = profile.socials[index];
    const card = `<div class="col-md-4"><div class="card border-primary ">
      <img class="card-img-top smaller-img img-fluid" src="` + social.imgURL + `" alt="Title">
      <div class="card-body">
        <h4 class="card-title">` + social.title + `</h4>
        <p class="card-text"><a href="` + social.URL + `">Naar social</a></p>
      </div>
    </div></div>`
    socials.innerHTML += card
}
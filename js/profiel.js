const profile = {
    userName: "Daalderink",
    biography: "Ik ben een jochie die het leuk vind om te programmeren. Gamen vind ik ook erg leuk om te doen",
    email: "david@aalderink.nl",
    birthDate: "19-7-2005",
    pfp: "img/logo.png",
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
    bannerImage: "https://img.lovepik.com/background/20211021/large/lovepik-cool-line-technology-banner-background-image_400112106.jpg",
    abilities: ["JS king", "HTML prince", "BS5 lord", "CSS emperor", "Story gamer"]
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
banner.innerHTML = '<img class="image-fluid" src="' + profile.bannerImage + '" alt="">'
birthDate.textContent = profile.birthDate
biography.textContent = profile.biography
courses.textContent = "opleidingen die ik heb gevolgd: " + profile.courses

for (let index = 0; index < profile.abilities.length; index++) {
    const abilitie = profile.abilities[index];
    abilities.innerHTML += abilitie + "<br>"
}

for (let index = 0; index < profile.projects.length; index++) {
    const project = profile.projects[index]; 
   
    const card = 
    `<div class="col-md-4"><div class="card">
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

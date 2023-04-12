const profile = {
    userName: "Daalderink",
    biography: "",
    email: "david@aalderink.nl",
    birthDate: "19-7-2005",
    pfp: "img/logo.png",
    projects: [
        {
            title: "hoger lager",
            description: "",
            lastWorkedOn: "26-10-2022",
            image:"https://www.koraalmedia.nl//km_files/koraalmedia_uploads/91883927_2528446960741791_5452484248109842432_n.jpg",
            teamMates:[{
                fullName:"Emiel van Velzen",
                link: "https://evanvelzen.github.io"

            }, {
                fullName: "Nathan Alberto",
                link: "https://n1alberto.github.io"

            }
            ]
        },
        {
            title: "tic tac toe",
            description: "",
            lastWorkedOn: "12-1-2023",
            image: "https://media.s-bol.com/Y7lX5g67KQ2Y/550x363.jpg",
            teamMates:[{
                fullName:"Emiel van Velzen",
                link: "https://evanvelzen.github.io"

            }, {
                fullName: "Nathan Alberto",
                link: "https://n1alberto.github.io"

            }
            ]
        },
        {
            title: "webcatalogus",
            description: "",
            lastWorkedOn: "",
            image: "https://wms.flexious.be/editor/plugins/imagemanager/content/2188/cases/eurojoe/cases-page_EuroJoe.jpg",
            teamMates:[{
                fullName:"Emiel van Velzen",
                link: "https://evanvelzen.github.io"

            }, {
                fullName: "Nathan Alberto",
                link: "https://n1alberto.github.io"
            }
            ]
        }
    ],
    courses: "Software Developer",
    bannerImage: "https://img.freepik.com/premium-vector/luxe-donkere-banner-achtergrond-met-blauwe-lijnen-combinaties_82226-22.jpg",
    abilities: ["js king", "html prince", "BS5 lord", "css emperor"]
};
console.log(profile);

const myUsername = document.querySelector(".my-username");
const myPfp = document.querySelector(".profile-picture");
const email = document.querySelector(".email");
const abilities = document.querySelector(".abilities");
const projects = document.querySelector(".projects");
myUsername.innerHTML = profile.userName
myPfp.innerHTML = '<img class="rounded-circle small" src="' + profile.pfp + '" alt="">'
email.innerHTML = profile.email
for (let index = 0; index < profile.abilities.length; index++) {
    const element = profile.abilities[index];
    abilities.innerHTML += element + "<br>"
}
for (let index = 0; index < profile.projects.length; index++) {
    const element = profile.projects[index];
    const card = 
    `<div class="col-md-4"><div class="card">
        <img class="card-img-top img-fluid" src="` + element.image +`" alt="Title">
        <div class="card-body">
            <h4 class="card-title">` + element.title + `</h4>
            <p class="card-text">` + element.description +`</p>
            <p class="card-text"> last worked on: ` + element.lastWorkedOn +`</p>
        </div>
    </div></div>`
    projects.innerHTML += card
}
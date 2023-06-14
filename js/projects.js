const projects = [
    {
        title: "Hoger Lager",
        description: "Bij het spel hoger of lager is het de bedoeling dat de deler een kaart neerlegt en omstebeurt een persoon moet raden of de kaart hoger of lager is dan de kaart die neergelegd is. Wanneer je het fout raad, krijg je een punt! Zet dit voort totdat het hele pak kaarten op tafel ligt. Tijdens het maken van dit spel ben ik geintroduceerd in JavaScript en heb ik ook zo javascript geleerd.",
        imgURL: "https://www.koraalmedia.nl//km_files/koraalmedia_uploads/91883927_2528446960741791_5452484248109842432_n.jpg",
        projectLink: "projects/homepage project/index.html"
    }, {
        title: "The Joy Of Creation Remake",
        description: "Ik ben bezig om de horror game 'The Joy Of Creation' na te maken in mijn eigen stijl. Hier gaat Godot engine voor worden gebruikt. Ik ga hier samen met een vriend aan samenwerken zodat het een beetje sneller kan gaan dan in mijn eentje. Alle credits gaan sowieso naar de originele maker van de game die je <a href='https://gamejolt.com/@Nikson_Official'>hier</a> kan vinden.",
        imgURL: "https://steamuserimages-a.akamaihd.net/ugc/942811960710688826/B38E02DC75520DB1BBAAFC0FD49E29AC9CE8FC3B/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    }, {
        title: "Slender: The Missing Soul",
        description: "Ik ben voor het keuzedeel gamedesign bezig om een videogame te maken. Ik werk hier dan samen in een groep. Het lijkt mij wel leuk om deze game te publiceren zodat mensen het kunnen spelen. Dit is ook de eerste keer dat ik met een game engine heb gewerkt dus heb ik ook die programmeertaal moeten leren",
        imgURL: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2014_23/491626/140606-slender-man-mn-735.jpg",
        projectLink: "https://github.com/ROCMondriaanTIN/sd22-p04-kdl-gp-game-slender-the-missing-soul"
    }, {
        title: "The Norse man",
        description: "Ik ben van plan om een videogame te maken die te maken heeft met de Noorse mythologie. Het gaat gedeelte een beetje gebaseerd zijn op de nieuwere God of War games. Ik vind de Noorse mythologie zelf erg interessant om meer van te weten dus ik ben van plan om belangrijke Noorse mythologie gebeurtenissen erin te stoppen zoals Ragnarök.",
        imgURL: "https://historyuk.s3.eu-west-2.amazonaws.com/s3fs-public/2022-02/norse%20mythology-min.jpg"
    }, {
        title: "Webcatalogus",
        description: "Voor een schoolproject moest ik samen met een groepje werken. In dat groepje moesten we een webcatalogus maken van een van de paar onderwerpen die wij toegewezen kregen. Bij dit project moesten wij voor het eerst met bootstrap werken en moesten wij gebruik maken van fetch in javascript.",
        imgURL: "https://wms.flexious.be/editor/plugins/imagemanager/content/2188/cases/eurojoe/cases-page_EuroJoe.jpg",
        projectLink: "projects/webcatalog/index.html"
    }, {
        title: "boter kaas en eieren",
        description: "Je speelt dit spel met 2 spelers. Een speler is de kruis en de andere speler is de cirkel. Het speelveld is een 3x3 veld waar een van de 2 spelers 3 op een rij moet krijgen om te winnen. Bij dit project heb ik voor het eerst een css grid gebruikt en in javascript een foreach loop.",
        imgURL: "https://lh4.googleusercontent.com/-7GAGyrlHcUU/Up77GOpl9eI/AAAAAAAAFvY/NXFGz7waglM/s522/boter-kaas-en-eieren_1.0.png",
        projectLink: "projects/boter/homepage.html"
    }, {
        title: "Escape Room",
        description: "Op school hebben we 2 themaweken gehad. De eerste was een Escape room maken. Je mocht zelf kiezen wat voor stijl het werd. Ik heb hier zelf niet echt veel nieuwe technieken geleerd aangezien het tussen twee periodes in zat.",
        imgURL: "https://rotterdamescaperoom.nl/wp-content/uploads/2020/01/wat-zijn-escape-rooms-en-wat-is-de-geschiedenis-van-dit-spel-1030x687.jpg",
        projectLink: "projects/escape-room/Start.html"
    }, {
        title: "Vier op een rij",
        description: "Voor de tweede themaweek mocht je zelf kiezen wat voor website je wilde maken. Ik heb daarvoor Vier op een rij gekozen. Het lijkt wel een beetje op boter kaas en eieren alleen is het een veel groter veld dan 3x3 en ze moeten naar beneden vallen. de technieken waren hier redelijk gelijk aan boter kaas en eieren.",
        imgURL: "https://api.bruna.nl/images/active/carrousel/fullsize/5010993724178_back.jpg",
        projectLink: "projects/vier/index.html"
    }, {
        title: "Dashboard",
        description: "Voor periode 4 van het eerste jaar moesten wij een dashboard pagina maken van onderwerpen die ons werd toegewezen waaruit wij konden kiezen. In deze dashboard pagina kan je een kijkje nemen naar de valutakoers, naar arcade games en een weerstation",
        imgURL: "https://boomerank.nl/wp-content/uploads/2020/03/KPI-dashboard-770x466.jpg",
        projectLink: "projects/dash/home.html"
    }
]

const showroom = document.querySelector(".showroom")

for (let index = 0; index < projects.length; index++) {
    const project = projects[index];

    const card = `<div class="col-md-4 d-flex align-items-stretch"></><div class="card">
        <img class="card-img-top" src="${project.imgURL}" alt="Title">
        <div class="card-body">
            <h4 class="card-title">${project.title}</h4>
            <p class="card-text">${project.description}</p>
            <a href="${project.projectLink}"><button>Link</button></a>
        </div>
    </div>
    </div>`
    showroom.innerHTML += card
}
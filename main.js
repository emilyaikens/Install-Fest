class TechButton {
    constructor (name, category, link) {
        this.name = name;
        this.category = category;
        this.link = link;
    }
}

// category name variables, also names of div classes
let br = 'browser';
let co = 'communication';
let cf = 'configuration';
let rt = 'runtime-environment';
let ide = 'ide';
let vi = 'virtual';
let dt = 'data'

// create array of buttons, each belonging to TechButton class
let buttons = [
    new TechButton('Google Chrome', br, 'https://www.google.com/chrome/dr/download/?brand=SLLM&geo=US&gclid=Cj0KCQiAutyfBhCMARIsAMgcRJQdI-dgCsyc-5MqKXcg88ByvbcbSsa39gnNhunSrDlHamIdpNe_OBMaAqXMEALw_wcB&gclsrc=aw.ds'),
    new TechButton('Microsoft Edge', br, 'https://www.microsoft.com/en-us/edge?exp=e00&brand=M022&form=MM145U&ef_id=_k_Cj0KCQiAutyfBhCMARIsAMgcRJTMmJ0eF8j2HP6sOqesDJ5XqIQzNQuLFzUPF7cp9hdxjicUFQULPMIaAj99EALw_wcB_k_&OCID=AIDcmmm6jz4jsn_SEM_k_Cj0KCQiAutyfBhCMARIsAMgcRJTMmJ0eF8j2HP6sOqesDJ5XqIQzNQuLFzUPF7cp9hdxjicUFQULPMIaAj99EALw_wcB_k_&gclid=Cj0KCQiAutyfBhCMARIsAMgcRJTMmJ0eF8j2HP6sOqesDJ5XqIQzNQuLFzUPF7cp9hdxjicUFQULPMIaAj99EALw_wcB'),
    new TechButton('Firefox', br, 'https://www.mozilla.org/en-US/firefox/new/'),
    new TechButton('Microsoft Teams', co, 'https://www.microsoft.com/en-us/microsoft-teams/download-app'),
    new TechButton('Slack', co, 'https://slack.com/downloads/mac'),
    new TechButton('Zoom', co, 'https://support.zoom.us/hc/en-us/articles/203020795-Installing-the-Zoom-application-on-macOS'),
    new TechButton('Homebrew', cf, 'https://docs.brew.sh/Installation'),
    new TechButton('Rectangle', cf, 'https://rectangleapp.com/'),
    new TechButton('Git', cf, 'https://git-scm.com/book/en/v2/Getting-Started-Installing-Git'),
    new TechButton('Oh My Zsh', cf, 'https://ohmyz.sh/'),
    new TechButton('Python', rt, 'https://www.python.org/downloads/'),
    new TechButton('Java Azul Zulu', rt, 'https://www.azul.com/downloads/?package=jdk'),
    new TechButton('Node.js', rt, 'https://nodejs.org/en/download/'),
    new TechButton('Intellij', ide, 'https://www.jetbrains.com/idea/download/#section=mac'),
    new TechButton('VS Code', ide, 'https://code.visualstudio.com/download'),
    new TechButton('Docker', vi, 'https://www.docker.com/products/docker-desktop/'),
    new TechButton('virtualenv', vi, 'https://pypi.org/project/virtualenv/'),
    new TechButton('pgAdmin', dt, 'https://www.pgadmin.org/download/pgadmin-4-macos/'),
    new TechButton('postgreSQL', dt, 'https://postgresapp.com/'),
]

// for each button in buttons array...
buttons.forEach(b => {
    //create a new div with the category name as class, if it does not already exist
    if (document.querySelector(`.${b.category}`) === null) {
        let div = document.createElement('div');
        div.className = b.category;
        document.getElementById('main').appendChild(div); // append new div
        // let catHead = document.createElement('h3');
        // catHead.innerHTML = (b.category).replace(/-/g, ' ');
        // document.querySelector(`.${b.category}`).appendChild(catHead); // append new h3
    }

    // create a new button named after object name
    let bt = document.createElement('button');
    bt.innerHTML = b.name;
    document.querySelector(`.${b.category}`).appendChild(bt);

    // add event listener that opens link in new window when button is clicked
    bt.addEventListener("click", function() {
        window.open(b.link, '_blank')
    })
})

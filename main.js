class TechButton {
    constructor (name, category, link) {
        this.name = name;
        this.category = category;
        this.link = link;
    }
}

let br = "browser"
let co = "communication"

// create array of buttons, each belonging to TechButton class
let buttons = [
    new TechButton('Google Chrome', br, 'https://www.google.com/chrome/dr/download/?brand=SLLM&geo=US&gclid=Cj0KCQiAutyfBhCMARIsAMgcRJQdI-dgCsyc-5MqKXcg88ByvbcbSsa39gnNhunSrDlHamIdpNe_OBMaAqXMEALw_wcB&gclsrc=aw.ds'),
    new TechButton('Microsoft Edge', br, 'https://www.microsoft.com/en-us/edge?exp=e00&brand=M022&form=MM145U&ef_id=_k_Cj0KCQiAutyfBhCMARIsAMgcRJTMmJ0eF8j2HP6sOqesDJ5XqIQzNQuLFzUPF7cp9hdxjicUFQULPMIaAj99EALw_wcB_k_&OCID=AIDcmmm6jz4jsn_SEM_k_Cj0KCQiAutyfBhCMARIsAMgcRJTMmJ0eF8j2HP6sOqesDJ5XqIQzNQuLFzUPF7cp9hdxjicUFQULPMIaAj99EALw_wcB_k_&gclid=Cj0KCQiAutyfBhCMARIsAMgcRJTMmJ0eF8j2HP6sOqesDJ5XqIQzNQuLFzUPF7cp9hdxjicUFQULPMIaAj99EALw_wcB'),
    new TechButton('Firefox', br, 'https://www.mozilla.org/en-US/firefox/new/'),
    new TechButton('Microsoft Teams', co, 'https://www.microsoft.com/en-us/microsoft-teams/download-app'),
    new TechButton('Slack', co, 'https://slack.com/downloads/mac'),
]

// for each button...
buttons.forEach(b => {

    //create a new div with the category name as class, if it does not already exist
    if (document.querySelector(`.${b.category}`) === null) {
        let div = document.createElement('div');
        div.className = b.category;
        document.getElementById('main').appendChild(div);
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

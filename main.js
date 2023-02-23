class TechButton {
    constructor (name, link) {
        this.name = name;
        this.link = link;
    }
}

class Browser extends TechButton {
    category = 'browser';
    constructor(name, link) {
        this.name = name;
        this.link = link;
    }
}
let googleChrome = new Browser('Google Chrome', 'https://www.google.com/chrome/dr/download/?brand=SLLM&geo=US&gclid=Cj0KCQiAutyfBhCMARIsAMgcRJQdI-dgCsyc-5MqKXcg88ByvbcbSsa39gnNhunSrDlHamIdpNe_OBMaAqXMEALw_wcB&gclsrc=aw.ds')
// let microsoftEdge = new TechButton('Microsoft Edge', 'browser', 'https://www.microsoft.com/en-us/edge?exp=e00&brand=M022&form=MM145U&ef_id=_k_Cj0KCQiAutyfBhCMARIsAMgcRJTMmJ0eF8j2HP6sOqesDJ5XqIQzNQuLFzUPF7cp9hdxjicUFQULPMIaAj99EALw_wcB_k_&OCID=AIDcmmm6jz4jsn_SEM_k_Cj0KCQiAutyfBhCMARIsAMgcRJTMmJ0eF8j2HP6sOqesDJ5XqIQzNQuLFzUPF7cp9hdxjicUFQULPMIaAj99EALw_wcB_k_&gclid=Cj0KCQiAutyfBhCMARIsAMgcRJTMmJ0eF8j2HP6sOqesDJ5XqIQzNQuLFzUPF7cp9hdxjicUFQULPMIaAj99EALw_wcB')
// let firefox = new TechButton('Firefox', 'browser', 'https://www.mozilla.org/en-US/firefox/new/')
// let microsoftTeams = new TechButton('Microsoft Teams', 'communication', 'https://www.microsoft.com/en-us/microsoft-teams/download-app')
// let slack = new TechButton('Slack', '')

console.log(googleChrome)
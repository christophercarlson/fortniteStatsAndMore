const
     config = require('./config'),
     superagent = require('superagent')


// builds Url with specific ending depending on data were looking for. 
const _fetch = (command) => {
    return superagent.get(`${config.url}/${command}`)
        .then(response => response.body)
        .catch(error => error.response.body)
}

const myId = '19dd9c1b0f0c4cb598d4153de1448624';

//prod09/weapons/get
// Search for list of weapons in fortnite.

exports.weapons = () =>{
    
}
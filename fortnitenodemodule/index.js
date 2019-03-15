//this page if for retrieving needed data from API. 

const
     config = require('./config'),
     superagent = require('superagent')
     // myId = '19dd9c1b0f0c4cb598d4153de1448624'; my gamer ID for testing. 


// builds Url with specific ending depending on data were looking for. 
const _fetch = (command) => {
    return superagent.get(`${config.url}/${command}`)
        .then(response => response.body)
        .catch(error => error.response.body)
}

// Search for list of weapons in fortnite.
exports.weapons = () =>{
    return _fetch('prod09/weapons/get')
}

// Get gamers ID from gamer tag. 
exports.playerID = (gamerTag) =>{
    return _fetch(`prod09/users/id?username=${gamerTag}`)
    
}

// Get gamers stats from ID. 
exports.stats = (gamerID) =>{
    return _fetch(`prod09/users/public/br_stats_v2?user_id=${gamerID}`)
}

const
    fortniteNodeModule = require('fortniteNodeModule'),
    inquirer = require('inquirer')

 // Prompt to ask which game type. 
 async function gameModePrompt(){
    return inquirer.prompt([{ 
        type: 'list',
        name: 'searchCriteria',
        message: `Which mode you like to see stats for \n `,
        choices: ['solo','duo','squad']
        }])
}

// Retrieve stats based on gamer tag. 
async function getStatistics(gamerTag) {
   
    console.log("Hello gamer, welcome to my fortnite module!");
    
    // sets stats body to variable. 
    const IDBody = await fortniteNodeModule.playerID(gamerTag);
    const ID = IDBody.uid;
    const statsBody = await fortniteNodeModule.stats(ID);

    // Prompt to get game mode type results based of gamer tag.
    const GameMode = await gameModePrompt();
    
            search = GameMode.searchCriteria;
            let dataBody = '';

            if(search === "solo"){
                dataBody = statsBody.data.gamepad.defaultsolo;
            }
            else if(search === "duo"){
                dataBody = statsBody.data.gamepad.defaultduo;
            }
            else if(search === "squad"){
                dataBody = statsBody.data.gamepad.defaultsquad;
            }
            
            console.log(`${gamerTag}: Kills -${dataBody.default.kills} Wins -${dataBody.default.placetop1} Matches Played -${dataBody.default.matchesplayed}` );
}

// Here are the function we right in this class, this sends them to client class. 
module.exports = {
    getStatistics
}
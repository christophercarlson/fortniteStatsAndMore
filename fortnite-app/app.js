const
    fortniteNodeModule = require('fortniteNodeModule'),
    inquirer = require('inquirer')


async function getStats(gamerTag) {
    const IDBody = await fortniteNodeModule.playerID(gamerTag);
    const id = IDBody.uid;
    const stats = await fortniteNodeModule.stats(id);
    console.log(stats);
}
    
//getStats("FugmaFanny")


// Here are the function we right in this class, this sends them to client class. 
// module.exports = {
    
// }
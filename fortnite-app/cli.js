const
    yargs = require('yargs')
    app = require('./app')

// usage typing so help command will work. 
const flags = yargs
    .usage('$0: Usage <cmd> [options]')
    .command({
        command: 'search',
        desc: 'type in [search <username>] searches for stats based off a players epic account name.',
        builder: (yargs) => {
            return yargs.options('u', {
                alias: 'username',
                describe: "players epic acount name."
            })
        },
        handler: (argv) => {app.getStatistics(argv.username)}
    })
    .help('help')
    .argv
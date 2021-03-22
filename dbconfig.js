// Create connection to database
const config = {
    authentication: {
        options: {
            userName: "vmohanav",
            password: "Ranjith#042041"
        },
        type: "default"
    },
    server: "testappserver11032021.database.windows.net",
    options: {
        database: "testdata",
        encrypt: true,
        enableArithAbort: true
    }
};

module.exports =config;
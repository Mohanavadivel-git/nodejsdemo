const config = require("./dbconfig");
const { Connection, Request } = require("tedious");

async function getOrders(){
    const connection = new Connection(config);

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            console.log(queryDatabase());
        }
    });

    function queryDatabase() {
        console.log("Reading rows from the Table...");

        // Read all rows from table
        const request = new Request(
            `SELECT * from Products`,
            (err, rowCount) => {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log(`${rowCount} row(s) returned`);
                }
            }
        );

        request.on("row", columns => {
            columns.forEach(column => {
                console.log("%s\t%s", column.metadata.colName, column.value);
                return column
            });
        });


        connection.execSql(request);

    }
}

module.exports = {
    getOrders: getOrders
}
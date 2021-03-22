const dboperations = require("./dboperations");

dboperations.getOrders().then(result => {
    console.log(result)
});

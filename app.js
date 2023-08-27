
const DbConnector = require("./modules/db_connector.js");

console.log("Welcome to my CRUD-JS CLI tool!")

const dbCon = new DbConnector.DbConnector();
dbCon.openConnection();
dbCon.closeConnection();

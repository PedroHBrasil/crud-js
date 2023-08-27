
const DbConnector = require("./modules/db_connector.js");
const DbMetadata = require("./modules/db_metadata.js");

console.log("Welcome to my CRUD-JS CLI tool!")

const dbCon = new DbConnector.DbConnector();
dbCon.openConnection();

const dbMetadata = new DbMetadata.DbMetadata(dbCon.con, dbCon.conProps.database);

setTimeout(() => {dbCon.closeConnection();}, 1000);

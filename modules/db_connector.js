
const mysql = require('mysql2');
const dotenv = require('dotenv').config();
// import dotenv from 'dotenv';

class DbConnector {

    con;
    conProps = {
        host: "",
        user: "",
        password: "",
        database: "",
    };

    constructor() {
        this.#readConProps();
        this.con = mysql.createConnection(this.conProps);
    }

    #readConProps() {
        console.info("Reading database connection properties.");
        this.conProps = {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        }
        console.log("Here are the parameters read from the environment: ");
        console.log(`\tHost: ${this.conProps.host}`);
        console.log(`\tUser: ${this.conProps.user}`);
        console.log(`\tDatabase name: ${this.conProps.database}`);
    }

    openConnection() {
        console.log("Opening connection to database.");
        this.con.connect((err) => {
            if (err) {
                console.error("Error connecting to database: ", err);
                return
            }
            console.log("Connected to database.")
        });
    }

    closeConnection() {
        console.log("Closing connection to database.");
        this.con.end((err) => {
            if (err) {
                console.error("Error closing connection to database: ", err);
                return
            }
            console.log("Connection closed.")
        });
    }
}

module.exports = {
    DbConnector
};

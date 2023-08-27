

class DbMetadata {

    con;
    dbName;
    dbTables;

    constructor(con, dbName) {
        this.con = con;
        this.dbName = dbName;
        this.#loadDbTablesNames();
    }

    #loadDbTablesNames() {
        this.con.query('SELECT table_name FROM information_schema.tables WHERE table_schema = ?', [this.dbName], (err, results) => {
            if (err) {
                console.error('Error fetching table names:', err);
            } else {
                this.dbTables = results.map(row => row.TABLE_NAME);
                console.log('Table names:', this.dbTables);
            }
        });
    }
}

module.exports = {
    DbMetadata
};

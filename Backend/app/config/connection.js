const mysql = require("mysql");
let connection;

if (process.env.DANDB_URL) {
  connection = mysql.createConnection(process.env.DANDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "xxxx",
    password: "xxxx",
    database: "todos_db",
  });
}

connection.on("connect", () => {
  console.log(`--> Connected to database '${connection.config.database}'.`);
});

connection.on("error", (err) => {
  console.log("--> Connection error: ", err);
});

connection.connect();

module.exports = connection;

var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'root',
    password: '	mgblzffegmt9nbmw',
    database: 'burgers_db'
  });
};

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

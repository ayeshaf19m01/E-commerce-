import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeems"
});

// Establish a connection
con.connect(function(err) {
    if (err) {
        console.error("Connection error:", err.message);
        return; // Stop further execution if there's an error
    }
    console.log("Connected to MySQL database.");
});

// Handle connection errors
con.on('error', (err) => {
    console.error("Database error:", err.message);
    if (err.fatal) {
        // Optionally reconnect if the error is fatal
        con.connect();
    }
});

export default con;

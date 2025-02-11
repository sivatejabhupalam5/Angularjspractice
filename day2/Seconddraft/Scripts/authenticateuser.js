// Function to authenticate a user
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'yourUsername',
    password: 'yourPassword',
    database: 'yourDatabase'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database!');
});

function authenticateUser(username, password, callback) {
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.query(query, [username, password], (err, results) => {
        if (err) {
            callback(err, null);
        } else if (results.length > 0) {
            callback(null, true);
        } else {
            callback(null, false);
        }
    });
}

// Example usage
authenticateUser('testUser', 'testPassword', (err, isAuthenticated) => {
    if (err) {
        console.error('Error during authentication:', err);
    } else if (isAuthenticated) {
        console.log('User authenticated successfully!');
    } else {
        console.log('Authentication failed. Invalid username or password.');
    }
});
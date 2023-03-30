const mysql = require('mysql');
const express = require('express');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "react",
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();

app.listen('3000', () => {
    console.log('Server started on port 3000');
})
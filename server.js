const express = require('express');
const app = express();
const port = 7000;
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const path = require('path');

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});


const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "superuser",
    database: "postgres" 
});

app.post("/", (req, res) => {
    const {tourselect, firstname, lastname, phonenumber, discountcode } = req.body;
    pool.query('INSERT INTO public."Tourist" (tourselect, firstname, lastname, phonenumber, discountcode) VALUES ($1, $2, $3, $4, $5)', 
    [tourselect, firstname, lastname, phonenumber, discountcode], 

    (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
        } else {
            console.log('Insert successful', result);
            res.sendFile(path.join(__dirname, "sights.html"));
        }
    });
});


app.get("/users", (req, res) => {
    pool.query('SELECT * FROM public."Tourist"', (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.send('Error retrieving users');
        } else {
            res.json(result.rows);
        }
    });
});

app.put("/adding", (req, res) => {
    const { tourselect, firstname, lastname, phonenumber, discountcode } = req.body;
    pool.query('INSERT INTO public."Tourist" (tourselect, firstname, lastname, phonenumber, discountcode) VALUES ($1, $2, $3, $4, $5)', 
    [tourselect, firstname, lastname, phonenumber, discountcode], 
    (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.send('Error inserting data');
        } else {
            res.send('Insert successful');
        }
    });
});

app.delete("/delete/:phonenumber", (req, res) => {
    const phonenumber = req.params.phonenumber;
    pool.query('DELETE FROM public."Tourist" WHERE phonenumber = $1', [phonenumber], (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.send('Error deleting user');
        } else {
            res.send('User deleted successfully');
        }
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

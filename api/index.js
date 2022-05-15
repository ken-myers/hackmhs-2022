// node index.js

process.env.NODE_ENV = 'development';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./queries');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' });
});

// app.post('/users', db.createUser);
app.delete('/users/:id', db.deleteUser);
app.delete('/teams/:id', db.deleteEvent);
app.delete('/teams/:teamID', db.deleteEvent);


app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});



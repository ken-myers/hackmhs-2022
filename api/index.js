// node index.js

process.env.NODE_ENV = 'development';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}));


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

app.get('/users/:id', db.getUserById);
app.get('/teams/:id', db.getTeamById);
app.get('/timeline-items/:id', db.getTeamTimelineItems);

app.post('/teams', db.createUser);
app.post('/users', db.createUser);
app.post('/timeline-items', db.createTimelineItem);

app.delete('/users/:id', db.deleteUser);
app.delete('/teams/:id', db.deleteTeam);
app.delete('/teams/:teamID', db.deleteTeam);


app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});



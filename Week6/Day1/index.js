const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/friends', (req, res) => {
    res.send('this  is a friends list');
});

app.get('/houston', (req, res) => {
    res.send('your location is houston');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
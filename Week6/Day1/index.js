const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

/* app.get('/', (req, res) => {
    res.send('hello world');
});

app.post('/cats_and_dogs', (req, res) => {
    res.send('Dogs and cats living together...mass hysteria!!');
});

app.get('/dogs', (req, res) => {
    res.send('woof');
});

app.put('/meow', (req, res) => {
    res.send('meow!');
}); */

app.get('/greet', (req, res) => {
    res.send('hello there');
});

app.put('/greet/Luke', (req, res) => {
    res.send('hello, Luke!');
});

app.post('/greet/Ahsoka', (req, res) => {
    res.send('hello, Ahsoka!');
});

app.get('/greet/Han', (req, res) => {
    res.send('hello, Han!');
});

app.get('/', (req, res) => {
    res.send('hello world');
});








server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
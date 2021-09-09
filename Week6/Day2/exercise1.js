
const PORT = 3001;
const express = require("express");
const app = express();
  
app.get('/green', (req,res) => {
      res.send ('Why hello there!');
  })
  
app.post('/mango', (req, res) => {
      res.send('🥭 is 🔥');
  })
  
app.put('/question', (req, res) => {
      res.send('I wonder whats wrong with this route 🤔?');
  })
  
app.get('/dogs', (req,res) => {
      res.send('Happy 🐶 loves yummy dog food!');
  })
  
  app.get('/fruitsmoothie',(req, res) => {
      res.send('A 🥭, 🍍, 🍓 make a wonderful smoothie!');
  })
  
  app.listen(PORT, console.log(`Listening on port ${PORT}`))





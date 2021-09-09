/* const express = require("express");
const app = express();
const PORT = 3000;
*/


/* const characters = [

    { name: "Jordan", address: "123 Main St", state: "GA" },
    { name: "Whitney", address: "123 Main St", state: "FL" },
    { name: "Tay", address: "123 Main St", state: "TX" },
    { name: "Michael", address: "23 Tomball St", state: "WA" },
    { name: "Calvin", address: "2020 RightLeft St", state: "PH" },
    { name: "Kendall", address: "465 Right St", state: "LA" },
    { name: "Patrick", address: "123 Colorado St", state: "TX" },

  ]; */

  /* const es6Renderer = require("express-es6-template-engine");



app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.get('/', (req,res) => {
    res.render("home", {
        locals: {
            characters: characters
        },
    });
});


app.listen(PORT, console.log(`Listening on ${PORT}:`)) */


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





const PORT = 3002;
const express = require("express");
const app = express();

/* app.get('/lovely', (req, res) => {
    res.send('Node and express are just lovely');
}) */

const cities = [
    
    { city: "Chicago", continent: "North America" },
    { city: "Boston", continent: "North America" },
    { city: "Baton Rouge", continent: "North America" },
    { city: "Austin", continent: "North America" },
    { city: "Rio De Janeiro", continent: "South America" },
    { city: "Auckland", continent: "New Zealand" },
    { city: "New London", continent: "North America" },
    { city: "Newark", continent: "North America" },
    { city: "Los Angeles", continent: "North America" },
    { city: "Houston", continent: "North America" }

   ];


const es6Renderer = require("express-es6-template-engine");


   app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.get('/', (req,res) => {
    res.render("one", {
        locals: {
            characters: characters
        },
    });
});



app.listen(PORT, console.log(`Listening on port ${PORT}`))
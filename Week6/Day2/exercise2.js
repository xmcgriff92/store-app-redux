const PORT = 1992;
const express = require("express");
const app = express();

/* app.get('/lovely', (req, res) => {
    res.send('Node and express are just lovely');
}) */

/* const cities = [
    
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

   ]; */


const es6Renderer = require("express-es6-template-engine");


/* app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.get('/', (req,res) => {
    res.render("one", {
        locals: {
            cities: cities
        },
    });
}); */

//
////

/* app.get("/", (req,res) => {    
    res.status(400).send("This is an invalid route")});
*/

// const myInfo = {name: "Xavier", city: "Houston", state: "Texas"}

/* app.get('/information', (req,res) => {
    res.send(myInfo);
}) */


const movies = {

    movieName: "Training Day", poster: "https://m.media-amazon.com/images/I/816XrpA0VfS._AC_SY679_.jpg",
    movieName: "Pulp Fiction", poster: "https://cdn.shopify.com/s/files/1/1057/4964/products/pulp-fiction-vintage-movie-poster-original-1-sheet-27x41-6_300x@2x.jpg?v=1607050941",
    movieName: "Snakes on a plane", poster: "https://m.media-amazon.com/images/I/512I2n3duwL._AC_.jpg",
    movieName: "Clash of the titans", poster: "https://movieposters2.com/images/702300-b.jpg",
    movieName: "The 40 year old virgin", poster: "https://m.media-amazon.com/images/I/51F1M8eR+mL._AC_.jpg"

}

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.get('/', (req,res) => {
    res.render("two", {
        locals: {
        
            movies: movies

        },
    });
});

app.listen(PORT, console.log(`Listening on port ${PORT}`))
// start of HTML structure within DOM

// header for the movie application
const header =document.createElement("h1")
header.innerHTML= "The Movie Searcher:"
document.body.append(header)
// end of header section

// creating main container (div1) as well as class and id within DOM.
const mainContainer =document.createElement("div");
document.body.append(mainContainer)
mainContainer.className = "main-container";
// 

// creating an input and button for application within div1.
const input =document.createElement("input");
mainContainer.appendChild(input);
input.className = "entry";
input.placeholder = "enter movie here";
input.type = "text";

// button section & class name
const button =document.createElement("button");
mainContainer.appendChild(button);
button.className = "search-button";
button.innerHTML = "Search";
// end of main container section

// creating a second div (div2) to append movies within div upon search
const contentContainer =document.createElement("div")
contentContainer.className = "other-container";
document.body.append(contentContainer)
// end of second container section
//
// end of HTML structure!


// creating function for search button and input field
const buttonSearch =document.querySelector(".search-button");

// creating section for async funtion and api information
const apiKey = "de67e333";
const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;

async function getMovies (){
    const userInput =document.querySelector(".entry").value;
    const fetchTitles = await fetch(`${apiUrl}&s=${userInput}`);
    const jsonMovies = await fetchTitles.json();
    contentContainer.innerHTML = "";
   
    for (const movie of jsonMovies.Search) {
        const movieTitle =document.createElement("h2")
        const movieImage =document.createElement("img");
        movieTitle.innerText = movie.Title
        contentContainer.append(movieTitle, movieImage)
        movieImage.src = movie.Poster;
    }
}
// end of async section
//

buttonSearch.addEventListener("click", () => getMovies())
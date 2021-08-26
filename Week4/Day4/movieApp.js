// start of HTML structure within DOM

// header for the movie application
const header =document.createElement("h1")
header.innerHTML= "The Movie Searcher"
document.body.append(header)
// end of header section

// creating main container (div1) as well as class and id within DOM.
const div1 =document.createElement("div");
document.body.append(div1)
div1.id = "main-container";
// 

// creating an input and button for application within div1.
const input =document.createElement("input");
div1.appendChild(input);
input.id = "user-selection";
input.className = "entry";
input.placeholder = "enter movie here";
input.type = "text";
const button =document.createElement("button");
div1.appendChild(button);
button.className = "search-button";
button.innerHTML = "Search";
// end of main container section

// creating a second div (div2) to append movies within div upon search
const div2 =document.createElement("div")
div2.id = "other-container";
document.body.append(div2)
// end of second container section

// end of HTML structure!

// creating function to add items intp input

async function addMovieSelection (){

}

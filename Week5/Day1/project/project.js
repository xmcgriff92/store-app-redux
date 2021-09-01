// orgainizing html stucture through the dom

// creating the main header for the search page
const mainHeader =document.createElement("h1");
mainHeader.innerHTML = "Book Finder"
mainHeader.className = "main-header"
document.body.append(mainHeader);
//
// end of header section

// creating main container for the input and button
const mainContainer =document.createElement("div");
mainContainer.className = "main-container";
document.body.append(mainContainer);
//
// creating a child element within the main container with the input and button functions
const inputField =document.createElement("input");
mainContainer.appendChild(inputField);
inputField.className = "entry";
inputField.placeholder = "enter book here";
inputField.type = "text";
//
// creating button field with class
const searchButton =document.createElement("button");
mainContainer.appendChild(searchButton);
searchButton.innerHTML = "Search";
searchButton.className  = "search-button";
//
// end of main container section!


// second header 
const secondHeader =document.createElement("h2");
secondHeader.innerHTML = "Here is your selection:";
document.body.append(secondHeader);
//
// creating container to display books found from search
const contentContainer =document.createElement("div");
contentContainer.className = "content-container";
document.body.append(contentContainer);
//
const buttonSearch =document.querySelector(".search-button");
//

// creating function for user input and button functionapity. creating async function for api and other components
async function getBooksPlease(){
    const userInput =document.querySelector(".entry").value;
    apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${userInput}`;
    const fetchBooks = await fetch(`${apiUrl}`);
    const jsonBooks = await fetchBooks.json();
    contentContainer.innerHTML= "";
    //console.log(jsonBooks)
    
    for (const book of jsonBooks.items) {
        const bookTitle =document.createElement("h3");
        const bookImage =document.createElement("img");
        const bookAuthor =document.createElement("h3");
        bookAuthor.innerHTML = book.volumeInfo.authors[0]
        bookTitle.innerText = book.volumeInfo.title
        bookImage.src = book.volumeInfo.imageLinks.thumbnail
        contentContainer.append(bookImage, bookTitle, bookAuthor)
        
    }
}

buttonSearch.addEventListener("click", () => getBooksPlease())
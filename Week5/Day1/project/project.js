// orgainizing html stucture through the dom

// creating the main header for the search page
const mainHeader =document.createElement("h1");
mainHeader.innerHTML = "Search book here:"
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
inputField.className = "input"
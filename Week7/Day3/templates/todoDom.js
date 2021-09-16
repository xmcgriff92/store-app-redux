// submit button and function
const container = document.querySelector(".main-container");
const button = document.querySelector(".submit-button");
const otherContainer = document.querySelector(".other-container");
const listItems = document.createElement("li");


    const addItems = async () => {
    const input = document.getElementById("user-list").value;
    // listItems.innerHTML =entry;
    // otherContainer.append(input);
    console.log(input)
    const toDoTable = { toDoItem: input}
    const data = await fetch("http://localhost:3011/item", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(toDoTable)
   });


}

button.addEventListener("click", () => {
    addItems();
})
// end of submit button and function

// update button and function
const containerTwo = document.querySelector(".main-container");
const updateButton = document.querySelector(".update-button");
const updateId = document.
const otherContainerTwo = document.querySelector(".other-container-two");
const updateItems = document.createElement("li");

function updateItems(){
    const input = document.getElementById("user-list");
    const entry =input.value;
    updateItems.innerHTML =entry;
    otherContainer.append(entry);
    console.log(entry)

} */

//// end of update and function
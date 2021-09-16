const container = document.querySelector(".main-container");

const button = document.querySelector(".submit-button");
const otherContainer = document.querySelector(".other-container");
const listItems = document.createElement("li");


function addItems(){
    const input = document.getElementById("user-list");
    const entry =input.value;
    listItems.innerHTML =entry;
    otherContainer.append(entry);
    console.log(entry)

}

button.addEventListener("click", () => {
    addItems();
}) 
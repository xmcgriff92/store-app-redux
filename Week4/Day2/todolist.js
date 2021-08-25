const container =document.querySelector(".main-container");
const input =document.getElementById("#user-list");
const button =document.querySelector(".submit-button");
const otherContainer =document.querySelector(".other-container");
const listItems =document.createElement("li");


function addItems(){

    const entry =input.value;
    listItems.innerHTML =entry;
    otherContainer.append(entry);
    console.log(entry)

}

button.addEventListener("click", () => {
    addItems();
})
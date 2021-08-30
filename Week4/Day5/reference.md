<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Day2/style.css">
    
    <title>Document</title>
</head>
<body>
    <h1>To Do List</h1>
    <div class="main-container">
        <input class="entry" id="user-list" type="text" placeholder="enter item here">
        <button class="submit-button">add</button>

    </div>

<div class="other-container"></div>
    
</body>




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
// submit button and function
const container = document.querySelector(".add-container");
const button = document.querySelector(".submit-button");
const otherContainer = document.querySelector(".other-container");
//const listItems = document.createElement("li");


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
const containerTwo = document.querySelector(".update-container");
const updateButton = document.querySelector(".update-button");
////

const updateItems = async () => {
    const inputTwo = document.getElementById("user-list").value;
    const updateId = document.getElementById("update-user-id").value;
    const userItem = document.getElementById("user-item").value;
    const URL = `http://localhost:3011/updateItem/${updateId}`;
    //console.log(inputTwo, updateId, updateItem)

    const updatedItem = {
        id: updateId,
        toDoItem: userItem
    }
    const dataUpdate = await fetch(URL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(updatedItem)
    });
    console.log(dataUpdate)
} 

updateButton.addEventListener("click", () => {updateItems();})

//// end of update and function

// delete item and function
const containerThree = document.querySelector(".delete-container");
const deleteButton = document.querySelector(".delete-button");
////

const deleteItems = async () => {
    const idInput = document.getElementById("delete-user-id").value;
    const URL = `http://localhost:3011/deleteItems/${idInput}`;

    const deleteItem = {
        id: idInput
    }
    const dataDelete = await fetch(URL, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(deleteItem)
    })
    console.log(dataDelete)
}

deleteButton.addEventListener("click", () => deleteItems())
//// end of delete item and function

// view all task and function
const containerFour = document.querySelector("view-container");
const viewAllButton = document.querySelector(".view-button");

const viewListItems = async () => {
const URL = `http://localhost:3011/allTask`;
const itemList = await fetch(URL, {
    method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
    });
    console.log(itemList)
    ////

    
    const jsonInfo = await itemList.json()
        for (item of jsonInfo){
            const getItem = item.toDoItem;
            const id = item.id;
            const contentContainer = document.querySelector(".other-container");
            const idNumber = document.createElement("p");
            const itemShow = document.createElement("p");
            idNumber.innerHTML = id;
            itemShow.innerHTML = getItem;
            contentContainer.append(idNumber, itemShow);
    }
}


viewAllButton.addEventListener("click", () => viewListItems())
//// end of viewa all task
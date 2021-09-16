const Sequelize = require('sequelize');
const { toDo } = require('./models');
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3011;

// middleware
app.use(express.json());
//
app.use(cors())
//// end of middleware

// res render
const es6Renderer = require("express-es6-template-engine")
app.engine("html", es6Renderer);
app.set("views", "template");
app.set("view engine", "html");

app.get('/', (req,res) => {
    res.render("toDo", {
        locals: {
        
        

        },
    });
}); 
////

// send item to database
app.post('/item', async (req, res) => {
    // req.body contains an Object with toDoItem
    console.log(req.body)
    const toDoItem = req.body.toDoItem;
    const newItem = await toDo.create({
        toDoItem
    });
    console.log(newItem)
    

    // Send back the new user's ID in the response:
    res.json({
        id: newItem.id
    });
})

// view all task
app.get('/allTask', async (req, res) => {
    const items = await toDo.findAll();
    res.json(items);
});
//// end of view all task

// view item by id
app.get('/itemById/:id', async (req, res) => {
    const oneItem = await toDo.findByPk(req.params.id);
    res.json(oneItem);
});
//// end of view item by id


// update item by id
app.post('/updateItem/:id', async (req, res) => {
    const { id } = req.params;
    
    // Assuming that `req.body` is limited to
    // the keys toDoItem
    const updatedItem = await toDo.update(req.body, {
      where: {
        id
      }
    });
    
    res.json(updatedItem);
});
//// end of update item by id

// delete item by id
app.delete('/deleteItems/:id', async (req, res) => {
    const { id } = req.params;
    const deletedItem = await toDo.destroy({
        where: {
            id
        }
    });
    res.json(deletedItem);
});
//// end of deleted items





app.listen(PORT, console.log(`Listening on port ${PORT}`));
//
//// env setup
require("dotenv").config();
const token = process.env.API_TOKEN;
const URL = process.env.URL;
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(URL, token);
// console.log(token)
///
/// server setup
const express = require("express");
const app = express();
const PORT = 3001;

// middleware
app.use(express.json());
// end of middleware
////

// Send stock information
app.post("/sendStocks", async (req,res) => {
    // console.log(req.body)
const { data, error } = await supabase
    .from("stockPicks")
    .insert([req.body])
    res.send(console.log(req.body));

})
// View all stocks choices
app.get("/viewStocks", async(req,res)=>{
    const { data, error } = await supabase
    .from("stockPicks")
    .select();
    res.send(data)
})
//
//// View stocks by name
app.get("/viewStocksBy/name", async(req,res)=>{
    const { data, error } = await supabase
    .from("stockPicks")
    .select("name");
    res.send(data)
})
//
//// View stocks by ticker
app.get("/viewStocksBy/ticker", async(req,res)=>{
    const { data, error } = await supabase
    .from("stockPicks")
    .select("ticker");
    res.send(data)
})
//
//// View stocks by price
app.get("/viewStocksBy/price", async(req,res)=>{
    const { data, error } = await supabase
    .from("stockPicks")
    .select("price");
    res.send(data)
})
//// Update stock choices
app.put("/updateStocks/:stocksId", async(req,res)=>{
const id = req.params.stocksId
const { data, error } = await supabase
  .from("stockPicks")
  .update(req.body)
  .match({ id: id })
  res.send(console.log(data))

})
//
//// Delete stock choices
app.delete("/deleteStocks/:stocksId", async(req,res)=>{
const id = req.params.stocksId;
const { data, error } = await supabase
    .from("stockPicks")
    .delete()
    .match({ id : id })
    res.send(console.log(data))
})
//
//// 
    

app.listen(PORT, console.log(`Listening on port ${PORT}`));
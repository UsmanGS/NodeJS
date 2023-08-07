const fs = require("fs");
const express = require("express");
//const a = fs.readFileSync("indexA.html", "utf-8");
//const b = fs.readFileSync("data.json", "utf-8");
//const bb= JSON.parse(fs.readFileSync("data.json", "utf-8"));
//const product= bb.products;

const server = express();
server.listen(8080, ()=>{
    console.log("Server Started");
});
const fs = require("fs");
const express = require("express");
const { Agent } = require("http");
const a = fs.readFileSync("public/demo.html", "utf-8");
const b = fs.readFileSync("public/data.json", "utf-8"); //print complete
const bb= JSON.parse(fs.readFileSync("public/data.json", "utf-8")); //convert into json
const product= bb.products; //select only products

const server = express();


//server.get('/',(req,res)=>{
//res.send('<h1>hello</h1>').sendStatus(201); //use to send html also with status
//res.sendFile('/Users/Xtreme/OneDrive/Desktop/NodeJs/Programs/Web Server/indexA.html'); //use to send html file
//res.sendStatus(404); //send status
//res.json(product);
//})

//BUILT-IN Middleware
//also known as body parser
//use to ready body or you cannot take data from body if this built-in middleware is not present ab above
server.use(express.json());
const morgan = require('morgan');
server.use(morgan('common'));
server.use(express.static('public'));//used to host static website

//server.use(express.urlencoded()); //used to send data from form with encoded url


//Application-level middleware
//server.use((req, res, next) => {
  //console.log(
    //req.hostname,
    //req.ip,
    //req.headers,
    //new Date(),
    //req.get("User-Agent")
  //);
  //next();
//});

//adove middleware is self defined logger middleware, you can also morgen which is built-in logger middleware


//Router-level middleware
//Middleware to take data from URL
const auth = (req, res, next) => {
  console.log(req.query.user);
  if (req.query.user == "usman") {
    next();
  } else {
    res.sendStatus(401);
  }
};

//Middleware to take data from BODY/FORM
const authA = (req, res, next) => {
  console.log(req.body.user);
  if (req.body.user == "usman") {
    next();
  } else {
    res.sendStatus(401);
  }
};

//server.use(auth); //apply to every routes

//api - endpoint - routes
server.get("/", auth, (req, res) => { //data by url query
  //apply to get routes
  //http://localhost:8080?user=usman --> ?user=usman is query string
  console.log({ type: "A" });
});

server.get("/product/:id", (req, res) => { //data by url param
  console.log(req.params);
  const url=req.params['id'];
  const prod= product[url];
  console.log(prod);
  res.setHeader("Content-Type", "text/html");
  let Modified= a.replace("**title**",prod.title)
  .replace("**url**",prod.thumbnail)
  .replace("**price**",prod.price)
  ;
  res.end(Modified);
  return;
  //console.log({ type: "A" });
});

server.post("/", authA, (req, res) => {
  //apply to put routes
  console.log({ type: "B" });
});

server.post("/product/:id", (req, res) => { //data by url param
  console.log({ type: "BB" });
});

server.patch("/", (req, res) => {
  console.log({ type: "C" });
});
server.delete("/", (req, res) => {
  console.log({ type: "D" });
});
server.put("/", (req, res) => {
  console.log({ type: "E" });
});

server.listen(8080, () => {
  console.log("Server Started");
});

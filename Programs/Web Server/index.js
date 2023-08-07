// const http = require("http");
// const data = { age: 22 };

// const server = http.createServer((req, res) => {
//   console.log(req.url); //req from url
//   console.log("Usman Server Started");
//   //res.setHeader('Content-Type','text/html'); //used to tell the application that the response is in html format
//   //res.end('<h1>Hello Sir G</h1>');
//   //res.setHeader('Name','Usman'); //setting dum value for headers
//   res.setHeader("Content-Type", "application/json");
//   //used to tell the application that the response is in json format
//   res.end(JSON.stringify(data)); //node accepts string
// });

// server.listen(8080);

//-----------------------------------------------------------------------------------

//static hosting or file is unchanged
// const http = require("http");
// const fs = require("fs");

// const a = fs.readFileSync("index.html", "utf-8");

// const server = http.createServer((req, res) => {
//   console.log(req.url); //req from url
//   console.log("Usman Server Started");
//   res.setHeader("Content-Type", "text/html");
//   res.end(a);
// });
// server.listen(8080);

//-----------------------------------------------------------------------------------

//api hosting or API or API send JSON data
// const http = require("http");
// const fs = require("fs");

// const a = fs.readFileSync("data.json", "utf-8");

// const server = http.createServer((req, res) => {
//   console.log(req.url); //req from url
//   console.log("Usman Server Started");
//   res.setHeader("Content-Type", "application/json");
//   res.end(a);
// });
// server.listen(8080);

//-----------------------------------------------------------------------------------

//dynamic html hosting or file is changeable
//const http = require("http");
//const fs = require("fs");

//const a = fs.readFileSync("indexA.html", "utf-8");

//const server = http.createServer((req, res) => {
//  console.log(req.url); //req from url
 // console.log("Usman Server Started");
  //res.setHeader("Content-Type", "text/html");
  //res.end(a);
//});
//server.listen(8080);


//-----------------------------------------------------------------------------------

//const http = require("http");
//const fs = require("fs");
//const a = fs.readFileSync("indexA.html", "utf-8");
//const b = fs.readFileSync("data.json", "utf-8");
//const bb= JSON.parse(fs.readFileSync("data.json", "utf-8"));
//const product= bb.products[0];
//const c = fs.readFileSync("index.html", "utf-8");

//const server = http.createServer((req, res) => {
  //console.log(req.url); //req from url
  //console.log("Usman Server Started");

 // switch(req.url){
   // case '/':
    //  res.setHeader("Content-Type", "text/html");
    //  res.end(a);
   //   break;
   // case '/usman':
    //  res.setHeader("Content-Type", "application/json");
    //  res.end(b);
    //  break;
    //case '/sunny':
      //res.setHeader("Content-Type", "text/html");
      //let Modified= a.replace("**title**",product.title)
      //.replace("**url**",product.thumbnail)
      //.replace("**price**",product.price)
      //;
      //res.end(Modified);
    //  break;
  //  default:
    //  res.setHeader("Content-Type", "text/html");
    //  res.end(c);
     // break;
      //res.writeHead(404);
      //res.end();
 // }
//
//});
//server.listen(8080);

//-----------------------------------------------------------------------------------

const http = require("http");
const fs = require("fs");
const a = fs.readFileSync("indexA.html", "utf-8");
const b = fs.readFileSync("data.json", "utf-8");
const bb= JSON.parse(fs.readFileSync("data.json", "utf-8"));
const product= bb.products;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method); //req from url
  console.log("Usman Server Started");
  if(req.url.startsWith('/product')){
    //console.log(req.url);
  const url=req.url.split('/')[2];
  //console.log(id);
  const prod= product.find(a=>a. id == (+url)); // + used to convert string into int
  //find(a=>a. id == (+url)) ; used to data from array/structure
  //console.log(prod);
      res.setHeader("Content-Type", "text/html");
      let Modified= a.replace("**title**",prod.title)
      .replace("**url**",prod.thumbnail)
      .replace("**price**",prod.price)
      ;
      res.end(Modified);
      return;
  
  }}

);
server.listen(8080);
//Call teh in-built module "http" to use  its funcitonalities
//Don't be like me and always chack the documentation -> https://nodejs.org/api/http.html
var http =require('http');
//var url = require('url');

//Create a simple server object
http.createServer((req,res)=>{
    //Defines the header
    //res.writeHead(200,{"Content-Type": "text/html"})

    res.write("This line has been instantiated from the server...")
    //Try to wrap the content using html tags
    //res.write("<h1>This line has been instantiated from the server...</h1>")

    //How to handle requests?
    //it is simple when it is a route
    //res.write("\nUser is in: " +  req.url)
    
    //
    //var q=url.parse(req.url, true).query
    
    res.end()
}).listen(8000)




//Create a simple server with html response

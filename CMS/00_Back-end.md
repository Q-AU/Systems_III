
# Back-end using MySQL, NodeJS and Express

## MySQL
I assume that you have experience using MySQL and phpMyAdmin at this point.
We will replicate the funcionality of your **codeigniter project** but using NodeJS and ExpressJS for the back-end.

## NodeJS

1. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.
2. Node provides access to several important global objects for use with Node program files (module, requiere, process).
3. Node has a many built-in modules to aid in interactions with the command line, the computer file system, and the Internet.
4. Node gives you the ablity to install packages that were built by other developers

Source: <https://www.codecademy.com/articles/what-is-node>

### Installation 
Download: <https://nodejs.org/en/>

## Creating a simple server with NodeJS
1. Create a folder named Servers [Any place in your computer, just remember where]
2. Inside the folder create an empty document [name does not matter] SimpleServer.js [the extension is important]
3. Open SimpleServer.js whit your favorite IDE
4. In the first line of the document simply write
```javascript
    var http =require('http');
```
5. Create an object from the module we are calling in the first line 
```javascript
    http.createServer((req,res)=>{
    res.write("This line has been instantiated from the server...")
    res.end()
    }).listen(8000)
```
6. So far nothing has happend since we haven't told Node.js to start the server. In order to do it: i) open the terminal/console app from your Operative System and ii) Run the comand:
```console
    node path/to/your/SimpleServer.js
```
- Now you can see that the console is in kind of frozen state, but it is actually working.
7. In order to see what is going on, open your favorite browser and type in the url bar: http://localhost:8000/. Be sure that the ending point of the url is :8000, since that is the port we have asasigned to listen and echo requests.
8. The client is in this case running in/is a browser [Chrome,  Safari, Firefor,  etc.] so it can understand HTML. To prove this concept, let's modify the line
```javascript
    res.write("This line has been instantiated from the server...")
```
- And chang it for:
```javascript
    res.write("<h1>This line has been instantiated from the server...</h1>")
```
- For some of you maybe the prebious didn't work. This is becuase your browser needs an speceific instruction
``` javascript
    res.writeHead(200,{"Content-Type": "text/html"})
    res.write("<h1>This line has been instantiated from the server...</h1>")
```
** IMPORTANT, SKIP STEP 9-11 IF YOU ARE DOING THIS IN FAMNIT SERVER**
9.  Now as you can see, every time we make a modification in the server we have to stop node and run it again as in the step 6. Here is when the magic of Node start to happen. As  you might recall, Node.js allows you to install third party(modules, API, functions and more) thourgh package manager. In this case, we will install nodemon <https://www.npmjs.com/package/nodemon> , a tool that automatically restarts the node application when changes in the directory and/or files are detected. Type this in the console/terminal application of your OS, be sure that you are in the root of your Directory.
```console
    npm install nodemon
```
- if you are in OSX, try this instead:
```console
    sudo npm install -g --force nodemon
```
- if you are in Win, try opening a PowerShell console as Admin and type the following commands:
type these commands:
```console
  1)Set-ExecutionPolicy RemoteSigned
  2)Set-ExecutionPolicy Unrestricted
  3)Get-ExecutionPolicy
  4)Exit
```

10. If everything went well, now we have next to our SimpleServer.js file 3 new items: i) a folder named: node_modules, annd ii) two files, namely: packege-lock.json and package.json. 
11. For this step, instead of running our SimpleServer.js using the code from step 6, let's do it like this. 
```console
    nodemon path/to/your/SimpleServer.js
```

- Try to change something to see that the server is refreshed everytime there is a change  in the code.
- Using nodemon during developing time might save you a lot of time :)
- Finally, for this simple server, let's handle requests from the client.
12. To keep things simple and using in-built functions lets use the second parameter of the server (req)
```javascript
    res.write("\nUser is in: " + req.url)
```

- Try to put this URL in the browser http://localhost:8000/Novice
- As you can observe,now we are able two handle routes in case our web app has different pages.

13. If you read the documentation you will see that there are ways to handle also parameters from an URL request anomg many other things, and this will get a little bit more complicated the more we deep down using this apporach. But let's not do it like this, instead let's take advantage of Node and it's modules to make thing easier for us. 

If you have reach this point and want to do more, try to create at least two routes and display different html for each.


## Express.js
### What is Express
- Expreess is a middleware that helps us to deal with server-side logic for web and mobile applications
- It's easy to use and plays along with many other frameworks, such as react, mongo,angular, etc.
- It's javascript :)

### Creating a NodeJs + Express.js server
we will learn about *ExpressJS* by building something. In this case, We will replicate your *codeigniter project*. In order to do this:
### The server
1. Create a folder and name it *CMS* (short for Content Managment System)
2. Navigate inside the folder and run the command 
```console
    npm init
```
- By pressing enter everytime console prompts you will keep the default value if you don't modify the entries
- The outcome of this operation will be a file named *package.json* that contains the basic information of our NodeJS project, particularlly, the packages that we have installed so far. 
3. Install your first dependency by running the command:
```console
    npm install express --save
```
4. In the root of this project, create a javascript empty file.By convention you should name it **index.js** but it does't really matter.
5. Open your **index.js**  in your favorite IDE and in the first line import the recently installed dependency
```javascript
    const express = require('express')
```
- note that in the new versions of javascript is not needed to finish the statments using semicolon :)
- if you are not familiar with type of variables in JS, revirew this article <https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/>

6. Create an instace of *express* like this.
```javascript
   const app = express()
```
7. Create a simple route for the server and assign a port to listen
```javascript
  const port = 5000
  app.get("/",(req,res)=>{
  res.send("hola")
  })
    ///App listening on port
  app.listen(process.env.PORT || port, ()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
  })
```
- First we select in wich port we want to listen 
- app.get, expects in this case 2 parameters. The first one that defines the route, in this case ("http://localhost:5000/") and the second one a callback to handle the request and response. The same way we did whe creted the simple server
- As you are very smart, for sure you have already notice that the more routes we create the more messy the code. To avoid writting everything in *index.js* and make the code a little bit more modular let's...
8. Save the file and in the console run
```console 
    node path/to/your/index.js
```
- Everythis its ok you will be able to see in the browser the string "hola"
- But now let's take advantage of *express* and make a route for our news
### The Routes

1. Create a create a folder  in the root of our project and name it: *routes*.
2. Inside *routes* folder create an empty javascript document and name it: *novice.js*.
3. In the *novice.js* file, import express and then create an instance of express.Router
```javascript
    const express= require("express")
    const novice = express.Router();
```
- We will see how it work once we define our first route
5. Create a route that points to *"/"*
```javascript
    novice.get('/',(req,res)=>{
    console.log("The route has been reached")
    res.send("novice")

})
```
6. Export your module so it can be called from other script by putting at the end of the code
```javascript
    module.exports=novice
})
```
7. In **index.js**, import **novice.js** and then use it like this.
```javascript
   //Import opur custom modules-controllers
    const novice= require("./routes/novice")
    //Routes
    app.use('/novice', novice);
})
```
8. Save the file and int he console run
```console 
    node path/to/your/index.js
```
9. In the browser visit *http://(localhost or remote address):5000/* 
- if you have follow each step so far you should be able to see a message in the console and the string *novice* in the browser
- The next step in this tutorial consists in consuming the information from the db you created in *codeigniter project*
- The idea is to stablish a connection with the db and then create our own CRUD opperations using express.

### The DB connection and the CRUD

1. In the root of our CMS project, create a folder DB and name it DB (name doesnt matter but just recall it)
2. Create an empty file in DB and named it **dbConn.js**
3. Run the following command in the console
```console
    npm install mysql2 dotenv
```
- The first one is a dependency that will help us to deal with the connection with the data base and the second one to keep secret our data base information

4. In **dbConn.js** import express, justa as in step **5** of **Creating a NodeJs + Express.js server**






# Back-end using MySQL, NodeJS and Express

## MySQL

At this point of the Lab sessions, I assume that you have experience using MySQL and phpMyAdmin. So We will skip that part and let you creat your own models.
As the intention of these set of tutorials is to replicate the funcionality of your ***codeigniter project*** we will consume the your existing DB but we will create our own CRUD operations using NodeJS and ExpressJS.

## NodeJS

- Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.
- Node provides access to several important global objects for use with Node program files (module, requiere, process).
- Node has a many built-in modules to aid in interactions with the command line, the computer file system, and the Internet.
- Node gives you the ablity to install packages that were built by other developers

[More info](https://www.codecademy.com/articles/what-is-node)

### Installation

 [Official instructions](https://nodejs.org/en/)

## Creating a simple server with NodeJS

1. Create a folder named Servers (Any place in your computer, just remember where)

2. Inside the folder create an empty document (name does not matter) SimpleServer.js (the extension is important)

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

6. So far nothing has happend since we haven't told Node.js to start the server. In order to do it: i) open the terminal/console app from your Operative System and ii) run the comand:

```console
node path/to/your/SimpleServer.js
```

- Now you can see that the console is in kind of frozen state, but it is actually working.

7. In order to see what is going on, open your favorite browser and type in the url bar: <http://localhost:8000/>. Be sure that the ending point of the url is :8000, since that is the port we have asasigned to listen and echo requests.

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

**IMPORTANT, SKIP STEPS 9-11 IF YOU ARE DOING THIS IN FAMNIT SERVER**

9. Now as you can see, every time we make a modification in the server we have to stop node and run it again as in the step 6. Here is when the magic of Node start to happen. As  you might recall, Node.js allows you to install third party(modules, API, functions and more) thourgh package manager. In this case, we will install [nodemon](https://www.npmjs.com/package/nodemon) , a tool that automatically restarts the node application when changes in the directory and/or files are detected. Type this in the console/terminal application of your OS, be sure that you are in the root of your Directory.

```console
npm install nodemon
```

- if you are in OSX, try this instead:

```console
sudo npm install -g --force nodemon
```

- if you are in Windows, try opening a PowerShell console as Admin and type the following commands:

```console
Set-ExecutionPolicy RemoteSigned
Set-ExecutionPolicy Unrestricted
Get-ExecutionPolicy
Exit
```

10. If everything went well, now we have next to our SimpleServer.js file 3 new items: i) a folder named: node_modules, annd ii) two files, namely: packege-lock.json and package.json.

11. For this step, instead of running our SimpleServer.js using the code from step 6, let's do it like this.

```console
nodemon path/to/your/SimpleServer.js
```

- Try to change something to see that the server is refreshed everytime there is a change  in the code.
- Using nodemon during developing time might save you a lot of time :)
- Finally, for this simple server, let's handle requests from the client.

12. Insert this line in the code:

```javascript
res.write("\nUser is in: " + req.url)
```

- Try to put this URL in the browser <http://localhost:8000/Novice>
- As you can observe,now we are able two handle routes in case our web app has different pages.
- If you read the documentation you will see that there are many ways to handla request an it's parameters. Things could get really complicated if we for example, have many routes, models, and exchange constantly information between server and client. The good news are that NodeJS has a lot of dependencies/frameworks that we can use in order to reduce our coding ;).
- So stop your currener server if running, save you files and continue to the next part fo this tutorial.

## Express.js

### What is Express

- Expreess is a middleware that helps us to deal with server-side logic for web and mobile applications
- It's easy to use and plays along with many other frameworks, such as react, mongo,angular, etc.
- It's javascript :)

### Creating a NodeJs + Express.js server

We will learn about *ExpressJS* by building something. In this case, We will replicate the functionality of your *codeigniter project*. So, In order to do this I have subdivided this next part of the tutorial in 3 pieces, namely:

- [The server](#the-server)
- [The routes](#the-routes)
- [The DB connection + the CRUD](#the-DB-connection-and-the-crud)

Be aware that you have to do all of them in order.

### The server

1. Create a folder and name it *CMS* (short for Content Managment System)
2. Navigate inside the folder and run the command

```console
npm init
```

- By pressing enter everytime console prompts, you will keep the default values if you don't modify the entries
- The outcome of this operation will be a file named *package.json* that contains the basic information of our NodeJS project, particularlly, the packages/dependecies that we have installed so far, none.

3. Install your first dependency by running the command:

```console
npm install express --save
```

4. In the root of this project, create a javascript empty file, by convention you should name it **index.js** but it does't really matter.

5. Open your **index.js**  in your favorite IDE and in the first line import the recently installed dependency

```javascript
const express = require('express')
```

- note that in the new versions of javascript is not needed to finish the statments using semicolon :)
- if you are not familiar with type of variables in JS, review this article <https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/>

6. Create an instace of *ExpressJS* like this.

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

- Observe that, first we select in wich port we want to listen int he declaration *const port*.
- then in *app.get*, we have passed 2 parameters. The first one that defines the route tha servers is "expecting", in this case "/", this means "http://ADDRESS:5000". The second one a callback to handle the request and response. If you remember, it is  in the same way we did when creted the simple server. In this case if someone visits the url, we will send the string hola to the browser.
- finally,  in *app.listen*, we instruct our server to start listening in a dedicated port, in this case 5000.

8. Save the file and in the console run

```console
node path/to/your/index.js
```

- Everythis it's ok you will be able to see in the browser the string "hola"
- We could write all our logic in this ***index.js*** file, but at some point it's gona become messy so let's instead create some *routes* in different files using the power of *ExpressJS*.

### The routes

1. In your *CMS* folder create a new folder and name it: *routes*.

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

6. Export your module so it can be called from other script by putting at the end of the code.

```javascript
module.exports=novice
```

7. In **index.js**, import **novice.js** and then use it like this.

```javascript
//Import opur custom modules-controllers
const novice= require("./routes/novice")
//Routes
app.use('/novice', novice);
```

8. Save the file and in the console run:

```console
node path/to/your/index.js
```

9. In the browser visit *http://ADDRESS:5000/*

- if you have follow each step so far you should be able to see a message in the console and the string *novice* in the browser
- The next step in this tutorial consists in consuming the information from the DB you created in *codeigniter project*. So every time an user visits an specific *endpoint*, for instace, http://ADDRESS:5000/novice, we get the news from the DB.
- The idea  for next steps is: i) to stablish aconnection with the DB and then ii) create our own CRUD opperations.

### The DB connection and the CRUD

1. In the root of our CMS project, create a folder and name it DB.

2. Create an empty file in DB folder and named it **dbConn.js**

3. Install the following dependencies:

```console
npm install mysql2 dotenv
```

- The first one (mysql2) is a dependency that will help us to deal with the connection with the data base and the second one to keep secret our data base information

4. In **DBConn.js**, import *ExpresJS*, justa as in step **5** of **The server**

6. Then define a variable tha will hold the connection:

```javascript
const  conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS, 
    database: 'Qcodeigniter',
  })
```

- In your case the value of the *database* key must contain excactly the same name as your database.
- In hte next step we will define the *host*, *user* and *password*.

7. In the CMC folder, create a file a name it *.env*, open it and write:

```text
DB_HOST=the address of your database
DB_USER=the user from your data base
DB_PASS=your password
```

- As we want to keep this information privatley and not to expose it in your repository, let's also create an *.gitignore* file in CMS folder and simply put

```text
.env
```
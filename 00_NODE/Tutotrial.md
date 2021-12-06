
# NODE.js
## What is NODE

1. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.
2. Node provides access to several important global objects for use with Node program files (module, requiere, process).
3. Node has a many built-in modules to aid in interactions with the command line, the computer file system, and the Internet.
4. Node gives you the ablity to install packages that were built by other developers

Source: <https://www.codecademy.com/articles/what-is-node>

## Installation 
Download: <https://nodejs.org/en/>

## Creating a simple server
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
  ```javascript
    res.writeHead(200,{"Content-Type": "text/html"})
    res.write("<h1>This line has been instantiated from the server...</h1>")
    ```
9.  Now as you can see, every time we make a modification in the server we have to stop node and run it again as in the step 6. Here is when the magic of Node start to happen. As  you might recall, Node.js allows you to install third party(modules, API, functions and more) thourgh package manager. In this case, we will install nodemon <https://www.npmjs.com/package/nodemon> , a tool that automatically restarts the node application when changes in the directory and/or files are detected. Type this in the console/terminal application of your OS, be sure that you are in the root of your Directory.
    ```console
    npm install nodemon
    ```
- if you are in OSX, try this instead:
  ```console
    sudo npm install -g --force nodemon
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
Continue the tutorial in 01_Express 

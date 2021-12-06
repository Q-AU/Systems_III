
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
1. Create a folder named Servers
2. Inside the folder create an empty document [name does not matter] SimpleServer.js [the extension is important]
3. Open SimpleServer.js whit your favorite IDE
4. In the first line of the document simply write
    > var http =require('http');
5. Create an object from the module we are calling in the first line 
    >```javascript
    http.createServer((req,res)=>{
    res.write("This line has been instantiated from the server...")
    res.end()
    }).listen(8000)
    ```

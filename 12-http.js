//HTTP module
//This thing is goddamn central to everything
//Youre working with a server ffs
//Express will help with this, but just some basics
const http = require('http')

//Req is the incoming request from the webpage
//res is the response we send back
const server = http.createServer((req, res) =>{
    //Now for the request object (basics)
    //Now we show the same page for every endpoint
    console.log(req)
    //And let's find the URL for the requested endpoint
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Page cannot be found</p>
    <a href="/">back</a>
    `)
   
})

//Listen to port 5000
server.listen(5000)
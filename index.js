const express = require('express');

const app = express();

// middlewares

const middlewareOne = (req,res,next) =>{
    console.log('Middleware request-1');
    next();
}
const middlewareTwo = (req,res,next) =>{
    console.log('Middleware request-2');
    next();
}
app.use(middlewareOne);

app.get('/',(req,res) =>{
    console.log(req);
    res.send(`<h1>Login page</h1>`)
})
app.get('/home',(req,res) =>{
    console.log(req);
    res.send(`<h1>Hi Kava!! Welcome to Prepbytes!</h1>`)
})
app.get('/course',middlewareTwo,(req,res) =>{
    console.log(req);
    res.send(`<h1>Full stack Web Developer!</h1>`)
})
app.get('/about',middlewareTwo,(req,res) =>{
    console.log(req);
    res.send(`<h1>Prepbytes!!! contact us : 91-8xxxxxxxx1</h1>`)
})

app.listen('8000',(req,res) =>{
    console.log(req);
})
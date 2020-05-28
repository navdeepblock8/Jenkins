const express = require('express');

const app = express();

const port = 3000;

const Add= require('./add.js');

const sum = Add(5);

app.get('/',(req,res)=>res.send('result is '+sum));

app.listen(port,()=>console.log('listening  to 3000'));
 


const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
//const mongoose =require('mongoose');



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // facilita a parte de envio de arquivos por http
app.use(morgan(morgan('dev')));



app.use(routes);


app.listen(3000);
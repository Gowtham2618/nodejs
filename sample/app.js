const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const {dbconnection} = require('./config/db');

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use('/user',require('./action/user/user'));
app.use('/projects',require('./action/projects/project'));

dbconnection();

module.exports = app;
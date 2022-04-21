const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const { verifyJWT } = require('../../hook/hook');
const ctrl = require('../../services/projects/controller');

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


app.post('/',verifyJWT,ctrl.createProject);
app.get('/:user_id',verifyJWT,ctrl.getUserDetails);


module.exports = app;
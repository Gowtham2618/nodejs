const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
// const {User} = require('../../services/user/controller');
const {Auth} = require('../../hook/hook');

const ctrl = require('../../services/user/controller');


const  {createJWT,verifyJWT} = require('../../hook/hook');


app.post('/signup',Auth,createJWT,ctrl.userdatatoDB);
app.post('/login',verifyJWT,ctrl.checkUsertoDB);
app.get('/:user_id',verifyJWT,ctrl.getUser);
app.get('/',verifyJWT,ctrl.getUsers);
app.put('/:user_id',verifyJWT,ctrl.updateUser);
app.delete('/:user_id',verifyJWT,ctrl.deleteUser);


module.exports = app;
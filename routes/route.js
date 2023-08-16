const express = require('express');
const { home, login, singup, session, loginget, loginpost } = require('../controllers/controllers');
const auth = require('../middleware/middleware');
const users = express();

users.get('/home',auth,home)
users.get('/session',session)
users.get('/singup',singup)
users.post('/login',login)
users.get('/loginpage',loginget)
users.post('/loginpost',loginpost)
module.exports=users;

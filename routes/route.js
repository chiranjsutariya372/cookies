const express = require('express');
const { home, login, singup, session, loginget, loginpost, homepage } = require('../controllers/controllers');
const auth = require('../middleware/middleware');
const passport = require('passport');
const users = express();

users.get('/',homepage)
users.get('/home',auth,home)
users.get('/session',session)
users.get('/singup',singup)
users.post('/login',login)
users.get('/loginpage',loginget)
users.post('/loginpost',passport.authenticate('local'),loginpost)

// GoogleAuth

users.get('/auth/google',passport.authenticate('google', { scope: ['profile'] }));

users.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports=users;

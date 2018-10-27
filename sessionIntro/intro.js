// a session is a place to store data you want across requests
// each user that visits your website has  unique session

// sessions allow the application to hold state

import express from 'express';
import session from 'express-session'

var app = express();
app.use(session());

// if session is enabled you can set data in one route handler
app.use(session({ secret: 'this-is-a-secret-token', cookie: { maxAge: 6000 }}));

// Access the session as req.session

app.get('/', function(req, res, next) {
    var sessData = req.session;
    sessData.someAttribute = 'foo';
    res.send('Returning with some text')
})

// and read it in another route handler

app.get('/bar', function(req, res, next) {
    var someAttribute = req.session.someAttribute;
    res.send(`This willl print the attribute I set earlier: &{someAttribute}`)
})

// passport to authenticate users, sessions to kee them logged in
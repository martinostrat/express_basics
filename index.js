const express = require('express');
const path = require('path');
const app = express();

const body = require('body-parser');
app.use(body.urlencoded({extended:true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if(username === 'user' && password === 'qwerty') {
        res.redirect('/dashboard');
    }
})

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

app.listen(3000, () => {
    console.log('server started at localhost:3000');
});
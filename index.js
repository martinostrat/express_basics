const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/user/:username', (req, res) => {
    let user = req.params.username;
    res.render('index', {username : user});
});

app.listen(3000, () => {
    console.log('server started at localhost:3000');
});
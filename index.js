const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/user/:username', (req, res) => {
    let user = req.params.username;
    res.render('index.ejs', {username : user});
});

app.listen(3000, () => {
    console.log('server started at localhost:3000');
});
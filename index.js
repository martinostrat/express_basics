const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/questions', (req, res) => {
    let questions = [
        {title: 'What is NodeJS', user: 'Kadi', votes: '10'},
        {title: 'What is ExpressJS', user: 'Madis', votes: '8'},
    ] 
    res.render('index', {questions: questions});
});

app.listen(3000, () => {
    console.log('server started at localhost:3000');
});
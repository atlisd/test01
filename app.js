var express = require('express');


// create an instance of the exprss app
var app = express();

var port = process.env.PORT || 5000;

// simple routing

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {list: ['a', 'b']});
});

app.get('/Amounts', function(req,res){
    res.render('amounts');
})

app.get('/books', function (req, res) {
    res.send('Hello books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
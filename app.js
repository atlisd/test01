var express = require('express');


// create an instance of the exprss app
var app = express();

var port = process.env.PORT || 5000;
var bookRouter = express.Router();

// simple routing

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

var books = [
    {
        title: 'War and peace',
        genre: 'Historical Fiction',
        author: 'Lve Nikolayevich Tolstoy',
        read: false
    },
    {
        title: 'Les Misérables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo',
        read: false
    },
    
];

bookRouter.route('/')
    .get(function(req,res){
        res.render('books', {
        
    title: 'books',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }],
        books:books
    })
    });
bookRouter.route('/single')
    .get(function(req,res){
        res.send('Hello single Book')
    });

app.use('/Books', bookRouter)

app.get('/', function (req, res) {
    res.render('index', {
        
    title: 'Hello from render',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }]
    });
});

app.get('/books', function (req, res) {
    res.send('Hello books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
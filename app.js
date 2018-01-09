var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');
var mongoose 	= require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Genre 	= require('./models/genre');
Book 	= require('./models/book');

var port = 3000;

mongoose.connect('mongodb://localhost/bookstore');
var db 	= mongoose.connection;

app.get('/', function(req, res) {
	res.send('Please use api/books or api/bookstore');
});

//Get All genres
app.get('/api/genres', function(req, res){
	Genre.getGenres(function(err, genres){
		if (err) {
			throw err;
		}
		res.json(genres);
	});
});

//Get All books
app.get('/api/books', function(req, res){
	Book.getBooks(function(err, books){
		if (err) {
			throw err;
		}
		res.json(books);
	});
});

//Get Single books
app.get('/api/books/:_id', function(req, res){
	Book.getBookById(req.params._id, function(err, book){
		if (err) {
			throw err;
		}
		res.json(book);
	});
});

//Get Single genres
app.get('/api/genres/:_id', function(req, res){
	Genre.getGenresById(req.params._id, function(err, book){
		if (err) {
			throw err;
		}
		res.json(book);
	});
});

//Add genres
app.post('/api/genres', function(req, res){
	var genre = req.body;
	Genre.addGenres(genre, function(err, genre){
		if (err) {
			throw err;
		}
		res.json(genre);
	});
});

//Update genres
app.put('/api/genres/:_id', function(req, res){
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenres(id, genre, {}, function(err, genre){
		if (err) {
			throw err;
		}
		res.json(genre);
	});
});

//Delete genres
app.delete('/api/genres/:_id', function(req, res){
	var id = req.params._id;
	Genre.deleteGenres(id, function(err, genre){
		if (err) {
			throw err;
		}
		res.json(genre);
	});
});

//Add books
app.post('/api/books', function(req, res){
	var book = req.body;
	Book.addBook(book, function(err, book){
		if (err) {
			throw err;
		}
		res.json(book);
	});
});

//Update books
app.put('/api/books/:_id', function(req, res){
	var id = req.params._id;
	var book = req.body;
	Book.updateBooks(id, book, {}, function(err, book){
		if (err) {
			throw err;
		}
		res.json(book);
	});
});

//Delete books
app.delete('/api/books/:_id', function(req, res){
	var id = req.params._id;
	Book.deleteBooks(id, function(err, book){
		if (err) {
			throw err;
		}
		res.json(book);
	});
});

app.listen(port, function(req, res){
	console.log('Server is running on port '+port);
});
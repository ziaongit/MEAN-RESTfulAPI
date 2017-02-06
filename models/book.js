var mongoose = require('mongoose');

//Genre Schema
var bookSchema = mongoose.Schema({
    title:{
        type:'string',
        required: true
    },
    genre: {
        type:'string'
    },
    description: {
        type:'string'
    },
    author: {
        type:'string'
    },
    publisher: {
        type:'string'
    },
    pages: {
        type:'string'
    },
    image_url: {
        type:'string'
    },
    buy_url: {
        type:'string'
    },
    create_date: {
        type:Date,
        default:Date.now
    }
});

var Books = module.exports = mongoose.model('Books', bookSchema);

// Get Books
module.exports.getBooks = function (callback, limit) {
    Books.find(callback).limit(limit);
}

// Get Book
module.exports.getBookById = function (id, callback) {
    Books.findById(id, callback);
}

// Add Book
module.exports.addBook = function (book, callback) {
    Books.create(book, callback);
}

// Update Book
module.exports.updateBook = function (id, book, optopns, callback) {
    var query = {_id: id};
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        img_url: book.img_url,
        buy_url: book.buy_url
    }
    Books.findOneAndUpdate(query, update, optopns, callback);
}


// Delete Book
module.exports.removeBook = function (id, callback) {
    var query = {_id: id};
    Books.remove(query, callback);
}



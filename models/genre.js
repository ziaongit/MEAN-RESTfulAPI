var mongoose = require('mongoose');

//Genre Schema
var genreSchema = mongoose.Schema({
    name:{
        type: 'string',
        required:true
    },
    create_date: {
        type:Date,
        default:Date.now
    }
});

var Genres = module.exports = mongoose.model('Genres', genreSchema);

// Get Genres
module.exports.getGenres = function (callback, limit) {
    Genres.find(callback).limit(limit);
}

// Add Genres
module.exports.addGenres = function (genre, callback) {
    Genres.create(genre, callback);
}

// Update Genres
module.exports.updateGenres = function (id, genre, optopns, callback) {
    var query = {_id: id};
    var update = {
        name: genre.name
    }
    Genres.findOneAndUpdate(query, update, optopns, callback);
}

// Delete Genres
module.exports.removeGenres = function (id, callback) {
    var query = {_id: id};
    Genres.remove(query, callback);
}

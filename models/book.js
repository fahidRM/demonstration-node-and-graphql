const mongoose =  require('mongoose');

const BookSchema =  new mongoose.Schema({
    id: { type: String, required: true}, 
    name: { type: String, required: true},
    isbn: { type: String, required: true},
    publisher: String, 
    published_on: String
});


const Book =  mongoose.model('Book', BookSchema);

module.exports = {Book};
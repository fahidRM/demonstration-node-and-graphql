const mongoose =  require('mongoose');

const AuthorSchema =  new mongoose.Schema({
    id: { type: String, required: true}, 
    name: { type: String, required: true},
    nationality: String, 
    books: [String]
});


const Author =  mongoose.model('Author', AuthorSchema);

module.exports = {Author};
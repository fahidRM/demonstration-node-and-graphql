module.exports  = {
    Query: {
        book: async (parent, {id}, {Book}, info) => {
            return await Book.findOne({id});
        }, 

        books: async (parent, args, {Book}, info) => {
            return await Book.find();
        }
    },
    

    

    Mutation: {
        createBook: async(parent, {id, name, isbn}, {Book}, info) => {
            const book =  new Book({ id, name, isbn});
            await book.save();
            return book;
        }, 
        updateBook: async(parent, {id, name, isbn}, {Book}, info) => {
            return null;
        },
        deleteBook: async(parent, {id}, {Book}, info) => {
            return true;
        },
    }
}






;

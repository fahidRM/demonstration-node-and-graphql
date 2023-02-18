module.exports  = {
        Query: {
            author: async (parent, {id}, {Author}, info) => {
                return await Author.findOne({id});
            }, 
    
            authors: async (parent, args, {Author}, infor) => {
                return await Author.find();
            }
        },
        

        Author: {
            books: async (parent, args,  {Book}, info) => {
                  return await Book.find(
                    { 'id': { $in:parent.books }}
                    );
            }
        }, 

        Mutation: {
            createAuthor: async(parent, {id, name}, {Author}, info) => {
                const author =  new Author({ id, name});
                await author.save();
                return author;
            }, 
            updateAuthor: async(parent, {id, name}, {Author}, info) => {
                return null;
            },
            deleteAuthor: async(parent, {id}, {Author}, info) => {
                return true;
            },
        }
    }




    

;

const {gql} = require('apollo-server-express')

module.exports  = gql`
    type Query {
        books: [Book] 
        book (id: ID!): Book
    } 

    type Mutation {
        createBook(id: ID!, name: String!, isbn: String!): Book, 
        updateBook(id: ID!, name: String!, isbn: String!): Book, 
        deleteBook(id: ID!): Boolean 
    } 

    type Book {
        id: ID!, 
        name: String!, 
        isbn: String!, 
        publisher: String, 
        published_on: String
    }
`;

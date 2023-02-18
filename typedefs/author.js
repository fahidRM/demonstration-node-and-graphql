const {gql} = require('apollo-server-express')

module.exports  = gql`
    type Query {
        authors: [Author] 
        author (id: ID!): Author
    } 

    type Author {
        id: ID!, 
        name: String!, 
        nationality: String, 
        books: [Book]
    }

    type Mutation {
        createAuthor(id: ID!, name: String!): Author, 
        updateAuthor(id: ID!, name: String!): Author, 
        deleteAuthor(id: ID!): Boolean 
    }

    
`;

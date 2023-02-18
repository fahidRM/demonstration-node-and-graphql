const {ApolloServer,  gql} = require('apollo-server-express');
const cors =  require('cors');
const express =  require('express');
const mongoose =  require('mongoose');



const models    =  require('./models');
const resolvers = require('./resolvers');
const typeDefs  =  require('./typedefs');


// additionald data types: graphql-scalars: https://www.the-guild.dev/graphql/scalars/docs/quick-start
mongoose.connect(process.env.MONGO_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }); // connect to mongoose

const app =  express();
app.use(express.json());
app.use(cors());


const server = new ApolloServer({
    typeDefs, 
    resolvers, 
    context: {
        ...models
    }
});

server.start().then(
    res => {
        server.applyMiddleware({app});

        app.listen(3000, () => {
            console.log('app running on port 3000...');
        });
    }
);


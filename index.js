const { ApolloServer } = require("apollo-server");
const { db } = require("./db");
const { typeDefs } = require("./Schema");
const { Query } = require("./resolvers/Query");
const { Tweet } = require("./resolvers/Tweet");
const { Mutation } = require("./resolvers/Mutations")


const server = new ApolloServer({
    typeDefs,
    resolvers : {
        Query,
        Tweet,
        Mutation
    },
    context :{
        db,
    }});

server.listen().then(({ url }) => {
    console.log("server is ready at " + url);
   
})
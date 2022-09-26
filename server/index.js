const { ApolloServer } = require("apollo-server"); // importing ApolloServers
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });
// typeDefs we are going to write all our graphql schema
// resolvers are basically used to resolve the queries you have

server.listen().then(({ url }) => {
    console.log("your api is running", url);
});
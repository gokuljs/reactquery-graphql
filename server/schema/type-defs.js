const { gql } = require("apollo-server");

// where we are going to write all our graphql query
// all graphql schema starts with a type called Query
const typeDefs = gql `
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
  }

  type Query {
    users: [User!]!
  }
`;

module.exports = { typeDefs };
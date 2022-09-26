const { gql } = require("apollo-server");

// where we are going to write all our graphql query
// all graphql schema starts with a type called Query
const typeDefs = gql `
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
  }

  type Movie {
    id: ID!
    name: String!
    year: Int!
    isReleased: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  enum Nationality {
    CANADA
    INDIA
    BRAZIL
    CHINA
    USA
  }
`;

module.exports = { typeDefs };
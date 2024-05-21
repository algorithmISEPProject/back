const { Neo4jGraphQL } = require('@neo4j/graphql');
const neo4j = require('neo4j-driver');
const { ApolloServer } = require('apollo-server');

const userTypeDefs = `#graphql
    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        posts: [Post!]! @relationship(type: "POSTED", direction: OUT)
        hobbies: [Hobby!]! @relationship(type: "HAS_HOBBY", direction: OUT)
    }

    mutation {
        createUser(input: CreateUserInput!): User
    }

`;

const driver = neo4j.driver(
  'neo4j+s://47bf683d.databases.neo4j.io:7687',
  neo4j.auth.basic('neo4j', 'VY1gKJWDr79Ql44_ktUGO9adQPlY1bk2Tv8dE9hi0uY'),
);

const neoSchema = new Neo4jGraphQL({ userTypeDefs, driver });

async function main() {
  const schema = await neoSchema.getSchema();

  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({ req }),
  });

  await server.listen(4000);

  console.log('Online');
}

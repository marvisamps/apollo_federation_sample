const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');

const typeDefs = gql`
  type Review @key(fields: "id") {
    id: ID!
    productId: ID!
    content: String!
  }

  type Query {
    reviews: [Review!]!
  }
`;

const reviews = [
  { id: "1", productId: "1", content: "Great laptop!" },
  { id: "2", productId: "2", content: "Amazing phone!" },
];

const resolvers = {
  Query: {
    reviews: () => reviews,
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen({ port: 4002 }).then(({ url }) => {
  console.log(`Review service ready at ${url}`);
});

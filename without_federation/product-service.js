const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  type Query {
    products: [Product!]!
  }
`;

const products = [
  { id: "1", name: "Laptop", price: 1000 },
  { id: "2", name: "Phone", price: 500 },
];

const resolvers = {
  Query: {
    products: () => products,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`Product service ready at ${url}`);
});

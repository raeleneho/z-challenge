import { createServer } from "miragejs";
import { createGraphQLHandler } from "@miragejs/graphql";
import { ListZellerCustomers } from "../graphql/queries";

const graphQLSchema = `
  type Query {
    listZellerCustomers: CustomerList!
  } 

  type CustomerList {
    items: [Customer!]!
  }

  type Customer {
    id: ID!
    name: String!
    email: String!
    role: String!
  }
`;

createServer({
  routes() {
    this.post("/graphql", createGraphQLHandler(graphQLSchema, this.schema));
  },

  seeds(server) {
    server.create("customer", {
      id: "1",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "MANAGER",
    });
    server.create("customer", {
      id: "2",
      name: "Dave Patel",
      email: "dave.patel@example.com",
      role: "ADMIN",
    });
  },
});

request("/graphql", ListZellerCustomers).then(/* ... */);

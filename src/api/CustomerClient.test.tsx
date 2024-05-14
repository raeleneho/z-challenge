import { fetchAllCustomers } from "./CustomerClient";
import { TestCustomersData } from "../mocks/testCustomers";

const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");

const mock = new MockAdapter(axios);

mock.onPost(process.env.REACT_APP_ENDPOINT || "").reply(200, {
  data: {
    listZellerCustomers: {
      items: TestCustomersData,
    },
  },
});

describe("CustomerClient fetchAllCustomers", () => {
  it("fetches all customers successfully", async () => {
    const customers = await fetchAllCustomers();
    expect(customers).toHaveLength(2);
    expect(customers[0].name).toBe("Jane Smith");
    expect(customers[1].role).toBe("ADMIN");
  });
});

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Customers } from "./Customers";
import { render, renderHook, waitFor } from "@testing-library/react";
import { TestCustomersData } from "../mocks/testCustomers";
import { ReactNode } from "react";

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

describe("Customers component", () => {
  test("customers page renders", async () => {
    const queryClient = new QueryClient();
    const Wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    render(
      <Wrapper>
        <Customers />
      </Wrapper>
    );

    await waitFor(() =>
      expect(queryClient.getQueryData(["customers"])).toHaveLength(2)
    );
  });
});

import { ListZellerCustomers } from "./graphql/queries";
import axios, { AxiosResponse } from "axios";

export const ENDPOINT =
  "https://prrwjjssnvhpbcdwbcwx3nm3zm.appsync-api.ap-southeast-2.amazonaws.com/graphql";

const API_KEY = "da2-6y6arb7mwvgrnmds2jignrgr2u";

export enum Role {
  ADMIN = "Admin",
  MANAGER = "Manager",
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export const fetchAllCustomers = async (): Promise<Customer[]> => {
  const response: AxiosResponse = await axios.post(
    ENDPOINT,
    JSON.stringify({ query: ListZellerCustomers }),
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
    }
  );
  return response.data.data.listZellerCustomers.items;
};

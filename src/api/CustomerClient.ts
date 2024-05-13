import { ListZellerCustomers } from "./graphql/queries";
import axios, { AxiosResponse } from "axios";

const ENDPOINT = process.env.REACT_APP_ENDPOINT || "";
const API_KEY = process.env.REACT_APP_API_KEY || "";

export enum Role {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
}

export const RoleLabels: Record<Role, string> = {
  [Role.ADMIN]: "Admin",
  [Role.MANAGER]: "Manager",
};

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

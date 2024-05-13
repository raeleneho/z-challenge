import { useQuery } from "@tanstack/react-query";
import { Role, RoleLabels, fetchAllCustomers } from "../api/CustomerClient";
import { UserCard } from "../components/UserCard/UserCard";
import { useState } from "react";
import { RadioButtonGroup } from "../components/RadioButtonGroup/RadioButtonGroup";
import {
  Alert,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

export const Customers = () => {
  const {
    data: customers,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      return fetchAllCustomers();
    },
  });

  const [selectedRole, setSelectedRole] = useState<Role>(Role.ADMIN);

  const userTypes = Object.entries(RoleLabels).map(([role, label]) => ({
    value: role,
    label: label,
  }));

  return (
    <>
      <Stack px={8} py={6}>
        <Typography id="user-select" variant="h2">
          User Types
        </Typography>
        <Stack py={4}>
          <RadioButtonGroup
            labelId="user-select"
            value={selectedRole}
            defaultValue={selectedRole}
            options={userTypes}
            onChange={(newValue) => {
              setSelectedRole(newValue as Role);
            }}
          />
        </Stack>
        <Divider />

        <Stack py={4}>
          <Typography variant="h2">{RoleLabels[selectedRole]} Users</Typography>

          <Stack py={4} spacing={2}>
            {isLoading ? (
              <CircularProgress />
            ) : (
              customers
                ?.filter((customer) => customer.role === selectedRole)
                .map((customer) => (
                  <UserCard
                    key={customer.id}
                    name={customer.name}
                    role={customer.role}
                  />
                ))
            )}
          </Stack>
          <Divider />
        </Stack>

        {isError && <Alert severity="error">Failed to fetch data</Alert>}
      </Stack>
    </>
  );
};

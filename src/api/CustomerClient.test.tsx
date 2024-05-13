// import axios from "axios";

// import { fetchAllCustomers, Role } from "../api/CustomerClient";
// import { renderHook } from "@testing-library/react";

// jest.mock("axios"); // Mock axios module
// const mockedAxios = axios as jest.Mocked<typeof axios>;

// describe("fetchAllCustomers", () => {
//   test("handles loading state", async () => {
//     mockedAxios.post.mockResolvedValue(() =>
//         Promise.resolve({
//             data: { data: { listZellerCustomers: { items: [] } } },
//             status: 200,
//           })
//     );

//     const { result, waitForNextUpdate } = renderHook(() => fetchAllCustomers());
//     expect(result.current.isLoading).toBe(true); // Initially in loading state

//     await waitForNextUpdate();
//     expect(result.current.isLoading).toBe(false); // Should no longer be in loading state after API call
//   });

//   test("handles API call error", async () => {
//     const errorMessage = "Failed to fetch data";
//     axios.post.mockRejectedValueOnce(new Error(errorMessage));

//     const { result, waitForNextUpdate } = renderHook(() => fetchAllCustomers());
//     expect(result.current.isError).toBe(false); // Initially not in error state

//     await waitForNextUpdate();
//     expect(result.current.isError).toBe(true); // Should be in error state after API call fails
//     expect(result.current.error.message).toBe(errorMessage); // Error message matches expected
//   });

//   test("fetches data successfully", async () => {
//     const mockData = [
//       { id: "1", name: "Test 1", email: "test1@example.com", role: Role.ADMIN },
//       {
//         id: "2",
//         name: "Test 2",
//         email: "test2@example.com",
//         role: Role.MANAGER,
//       },
//     ];
//     axios.post.mockImplementationOnce(() =>
//       Promise.resolve({
//         data: { data: { listZellerCustomers: { items: mockData } } },
//         status: 200,
//       })
//     );

//     const { result, waitForNextUpdate } = renderHook(() => fetchAllCustomers());
//     await waitForNextUpdate();

//     expect(result.current.data).toEqual(mockData);
//     expect(result.current.isLoading).toBe(false);
//     expect(result.current.isError).toBe(false);
//   });
// });

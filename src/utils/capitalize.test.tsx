import { capitalizeFirstLetter, extractFirstInitial } from "./capitalize";

test("capitalizes the first letter", () => {
  const role = "manager";

  expect(capitalizeFirstLetter(role)).toBe("Manager");
  expect(capitalizeFirstLetter("")).toBe("");
});

test("extracts and displays first initial from full name", () => {
  const upperCaseName = "John Smith";
  const lowerCaseName = "sam Smith";

  expect(extractFirstInitial(upperCaseName)).toBe("J");

  expect(extractFirstInitial(lowerCaseName)).toBe("S");

  expect(extractFirstInitial("")).toBe("");
});

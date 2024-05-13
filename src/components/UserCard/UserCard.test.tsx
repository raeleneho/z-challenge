import { render, screen } from "@testing-library/react";
import { UserCard } from "./UserCard";
import * as capitalizeUtils from "../../utils/capitalize";

jest.mock("../utils/capitalize", () => ({
  ...jest.requireActual("../utils/capitalize"),
  capitalizeFirstLetter: jest.fn(),
  extractFirstInitial: jest.fn(),
}));

describe("UserCard component", () => {
  test("renders user's name and role correctly", () => {
    const name = "John Doe";
    const role = "Admin";

    render(<UserCard name={name} role={role} />);

    const nameElement = screen.getByText(name);
    const roleElement = screen.getByText("Admin");

    expect(nameElement).toBeInTheDocument();
    expect(roleElement).toBeInTheDocument();
  });

  test("extracts and displays first initial from full name", () => {
    const name = "John Doe";
    const role = "Admin";

    render(<UserCard name={name} role={role} />);

    const avatarText = screen.getByText("J");

    expect(avatarText).toBeInTheDocument();
  });

  test("capitalizes the first letter of the role", () => {
    const mockCapitalizeFirstLetter = jest.spyOn(
      capitalizeUtils,
      "capitalizeFirstLetter"
    );
    mockCapitalizeFirstLetter.mockImplementation((word: string) =>
      word.toUpperCase()
    );
    const name = "John Doe";
    const role = "manager";

    render(<UserCard name={name} role={role} />);

    const roleElement = screen.getByText("Manager");

    expect(roleElement).toBeInTheDocument();
  });
});

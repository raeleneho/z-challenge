import { render, screen } from "@testing-library/react";
import { UserCard } from "./UserCard";

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
});

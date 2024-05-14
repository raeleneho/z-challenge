import { render, screen } from "@testing-library/react";
import RadioButton from "./RadioButton";

describe("RadioButton component", () => {
  test("renders without crashing", () => {
    render(<RadioButton label="Test Label" value="test" checked={false} />);
  });

  test("displays label and value correctly", () => {
    render(
      <RadioButton label="Test Label" value="value test" checked={false} />
    );
    const label = screen.getByText("Test Label");
    const radioButton = screen.getByRole("radio");
    expect(label).toBeInTheDocument();
    expect(radioButton).toBeInTheDocument();
    expect(radioButton).toHaveAttribute("value", "value test");
  });

  test("applies checked state when selected", () => {
    render(<RadioButton label="Test Label" value="test" checked={true} />);

    const element = screen.getAllByTestId("RadioButtonCheckedIcon");
    expect(element.length).toEqual(1);
  });

  test("applies unchecked state when unselected", () => {
    render(<RadioButton label="Test Label" value="test" checked={false} />);

    const element = screen.getAllByTestId("RadioButtonUncheckedIcon");
    expect(element.length).toEqual(1);
  });

  test("handles edge cases like empty label", () => {
    render(<RadioButton label="" value="test" checked={false} />);
    const radioButton = screen.getByRole("radio");
    expect(radioButton).toBeInTheDocument();
  });
});

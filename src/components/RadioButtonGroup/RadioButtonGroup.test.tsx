import { render, screen, fireEvent } from "@testing-library/react";
import { RadioButtonGroup } from "./RadioButtonGroup";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
];

describe("RadioButtonsGroup component", () => {
  describe("Rendering and basic functionality", () => {
    test("renders without crashing", () => {
      render(
        <RadioButtonGroup
          label="Test Label"
          value=""
          defaultValue=""
          labelId="test-label"
          options={[]}
          onChange={() => {}}
        />
      );
    });

    test("displays label and options correctly", () => {
      render(
        <RadioButtonGroup
          label="Test Label"
          value=""
          defaultValue=""
          labelId="test-label"
          options={options}
          onChange={() => {}}
        />
      );

      const label = screen.getByText("Test Label");
      const option1 = screen.getByText("Option 1");
      const option2 = screen.getByText("Option 2");

      expect(label).toBeInTheDocument();
      expect(option1).toBeInTheDocument();
      expect(option2).toBeInTheDocument();
    });
  });

  describe("Handling state and events", () => {
    // test("handles default value correctly", () => {
    //   const defaultValue = "option1";

    //   render(
    //     <RadioButtonGroup
    //       label="Test Label"
    //       value=""
    //       defaultValue={defaultValue}
    //       labelId="test-label"
    //       options={[
    //         { value: "option1", label: "Option 1" },
    //         { value: "option2", label: "Option 2" },
    //       ]}
    //       onChange={() => {}}
    //     />
    //   );

    //   // Attempt to access the radio button by data-testid
    //   const checkedRadioButton = screen.getByTestId("radio-button-option1");
    //   console.log(checkedRadioButton);
    //   expect(checkedRadioButton).toHaveValue("checked");
    // });

    test("handles onChange event", () => {
      const onChangeMock = jest.fn();

      render(
        <RadioButtonGroup
          label="Test Label"
          value=""
          defaultValue=""
          labelId="test-label"
          options={options}
          onChange={onChangeMock}
        />
      );

      const radioButtons = screen.getAllByRole("radio");
      fireEvent.click(radioButtons[1]);

      expect(onChangeMock).toHaveBeenCalledTimes(1);
      expect(onChangeMock).toHaveBeenCalledWith("option2");
    });
  });
});

import { FormControlLabel, Radio } from "@mui/material";
import "./RadioButton.css";

interface RadioButtonProps {
  radioButtonLabel: string;
  radioButtonValue: string;
}

const RadioButton = ({
  radioButtonLabel,
  radioButtonValue,
  ...props
}: RadioButtonProps) => {
  return (
    <FormControlLabel
      className="radio"
      control={<Radio />}
      label={radioButtonLabel}
      value={radioButtonValue}
      {...props}
    />
  );
};

export default RadioButton;

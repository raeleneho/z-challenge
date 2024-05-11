import { FormControl, FormLabel, RadioGroup } from "@mui/material";
import RadioButton from "../RadioButton/RadioButton";

interface RadioOption {
  value: string;
  label: string;
}
interface RadioButtonGroupProps {
  label: string;
  value: string;
  defaultValue: string;
  labelId: string;
  options: RadioOption[];
  onChange: (value: string) => void;
}

const RadioButtonsGroup = ({
  label,
  value,
  defaultValue,
  labelId,
  options,
  onChange,
}: RadioButtonGroupProps) => {
  return (
    <>
      <FormControl>
        <FormLabel id={label}>{label}</FormLabel>
        <RadioGroup
          aria-labelledby={labelId}
          name={label}
          defaultValue={defaultValue}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option) => (
            <RadioButton
              key={option.value}
              radioButtonValue={option.value}
              radioButtonLabel={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default RadioButtonsGroup;

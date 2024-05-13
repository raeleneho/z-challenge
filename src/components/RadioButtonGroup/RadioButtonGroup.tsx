import { FormControl, FormLabel, RadioGroup, Stack } from "@mui/material";
import RadioButton from "../RadioButton/RadioButton";

interface RadioOption {
  value: string;
  label: string;
}
interface RadioButtonGroupProps {
  label?: string;
  value: string;
  defaultValue: string;
  labelId?: string;
  options: RadioOption[];
  onChange: (value: string) => void;
}

export const RadioButtonGroup = ({
  label,
  value,
  defaultValue,
  labelId,
  options,
  onChange,
}: RadioButtonGroupProps) => {
  return (
    <FormControl>
      {label && <FormLabel id={labelId}>{label}</FormLabel>}
      <RadioGroup
        aria-labelledby={labelId}
        name={label}
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <Stack spacing={1}>
          {options.map((option) => (
            <RadioButton
              checked={option.value === value}
              key={option.value}
              value={option.value}
              label={option.label}
            />
          ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  );
};

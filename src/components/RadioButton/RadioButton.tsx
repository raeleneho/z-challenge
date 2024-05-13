import { Box, FormControlLabel, Radio } from "@mui/material";
import { ReactComponent as UncheckedIcon } from "../../assets/UncheckedRadio.svg";
import { ReactComponent as CheckedIcon } from "../../assets/CheckedRadio.svg";

interface RadioButtonProps {
  label: string;
  value: string;
  checked: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  checked,
  ...props
}: RadioButtonProps) => {
  return (
    <Box
      data-testid="radio-button-container"
      sx={(theme) => ({
        borderRadius: 2,
        padding: "4px 0",
        backgroundColor: checked ? theme.palette.primary.light : "transparent",
      })}
    >
      <FormControlLabel
        sx={{ ml: 0.75, color: "secondary.main" }}
        control={
          <Radio
            icon={<UncheckedIcon data-testid="RadioButtonUncheckedIcon" />}
            checkedIcon={<CheckedIcon data-testid="RadioButtonCheckedIcon" />}
          />
        }
        checked={checked}
        label={label}
        value={value}
        {...props}
        data-testid={`radio-button-${value}`}
      />
    </Box>
  );
};

export default RadioButton;

import { Avatar, Stack, Typography } from "@mui/material";
import { theme } from "../../library/theme";
import {
  capitalizeFirstLetter,
  extractFirstInitial,
} from "../../utils/capitalize";

interface UserCardProps {
  name: string;
  role: string;
}

export const UserCard = ({ name, role }: UserCardProps) => {
  return (
    <Stack direction="row" justifyContent="flex-start" alignItems="center">
      <Avatar variant="rounded" sx={{ bgcolor: theme.palette.primary.light }}>
        <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
          {extractFirstInitial(name)}
        </Typography>
      </Avatar>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        pl={2}
      >
        <Typography variant="h6">{name}</Typography>

        <Typography
          variant="body2"
          sx={{ color: theme.palette.secondary.light }}
        >
          {capitalizeFirstLetter(role)}
        </Typography>
      </Stack>
    </Stack>
  );
};

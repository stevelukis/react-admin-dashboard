import {Box, Stack, Typography, useTheme} from "@mui/material";
import {tokens} from "../theme";
import ProgressCircle from "./ProgressCircle";

// eslint-disable-next-line react/prop-types,no-unused-vars
const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Stack justifyContent="space-between" direction="row">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {subtitle}
          </Typography>
        </Box>
        <Stack justifyContent="space-between" direction="column">
          <Box>
            <ProgressCircle progress={progress} />
          </Box>
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{ color: colors.greenAccent[600] }}
          >
            {increase}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default StatBox;

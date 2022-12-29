import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const StatBoxNoCircle = ({ title, subtitle, icon, increase ,unit, uniti,toggleButton}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title} {unit}
          </Typography>
        </Box>
        <Box>
          {toggleButton}
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase} {uniti}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBoxNoCircle;
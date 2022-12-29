import { Box, Typography, useTheme} from "@mui/material";
import { tokens } from "../theme";
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const StatBoxToggle = ({ subtitle, icon, increase , uniti}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

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
          
          </Typography>
        </Box>
        <Box>
          <ToggleButtonGroup
            color="info"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="1">ON</ToggleButton>
            <ToggleButton value="0">OFF</ToggleButton>
          </ToggleButtonGroup>
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

export default StatBoxToggle;

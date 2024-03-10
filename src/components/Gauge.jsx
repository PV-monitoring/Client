import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const Gauge = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width="100%"
      m="0 20px"
      border={`1px solid ${colors.grey[300]}`} // Add border styling
      borderRadius="8px" // Add border radius
      padding="25px" // Add padding
      boxShadow={`0px 4px 4px ${colors.grey[300]}`} // Add box shadow
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <ProgressCircle progress={progress} size={120} /> {/* Increase progress circle size */}
        <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100], mt: 2 }}>
          {title}
        </Typography>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500], mt: 1, flex: 1 }}>
            {subtitle}
          </Typography>
          <Typography variant="h5" fontStyle="italic" sx={{ color: colors.greenAccent[600], mt: 1 }}>
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Gauge;

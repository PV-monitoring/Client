import React, { useEffect, useState } from "react";
import { tokens } from "../theme";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Header from "../components/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

const PlantDetailsPage = () => {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  // State to store plant details
  const [plantDetails, setPlantDetails] = useState({
    id: "",
    name: "",
    location: "",
    capacity: "",
    status: "",
  });

  useEffect(() => {
    // Extract plant details from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const name = urlParams.get("name");
    const location = urlParams.get("location");
    const capacity = urlParams.get("capacity");
    const status = urlParams.get("status");

    // Update plant details state
    setPlantDetails({ id, name, location, capacity, status });

    // Print plant details to the console
    console.log("Plant Details:", plantDetails);
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
      <div className="app">
        <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Plant Details Page" subtitle={plantDetails.name} />
              </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          border={`1px solid ${colors.grey[300]}`}
          borderRadius="8px"
          padding="20px"
          boxShadow={`0px 4px 8px ${colors.grey[300]}`}
          maxWidth="600px"
          margin="auto"
          marginTop="50px">
          <Typography variant="h5" gutterBottom>
            Plant ID: {plantDetails.id}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Plant Name: {plantDetails.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Plant Location: {plantDetails.location}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Capacity: {plantDetails.capacity}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Status: {plantDetails.status}
          </Typography>
        </Box>
        </Box>
        
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default PlantDetailsPage;

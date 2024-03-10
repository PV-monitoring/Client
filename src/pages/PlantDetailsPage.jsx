import React, { useEffect, useState } from "react";
import { tokens } from "../theme";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Header from "../components/Header";
import LineChart from "../components/LineChart";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { getInvertersData, dynamicInverters } from "../data/mockData";

const PlantDetailsPage = () => {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  // Use the function to get dynamic data
  const dynamicData = dynamicInverters();
  // Call the function to get transformed data based on dynamic data
  const mockDataInvoices = getInvertersData(dynamicData);

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

        <Box gridColumn="span 8" gridRow="span 2" backgroundColor={colors.primary[400]}>
                  <Box
                    mt="25px"
                    p="0 30px"
                    display="flex "
                    justifyContent="space-between"
                    alignItems="center">
                    <Box>
                      <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                        Generation Gap
                      </Typography>
                      <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                        500 kWh
                      </Typography>
                    </Box>
                    <Box>
                      <IconButton>
                        <DownloadOutlinedIcon
                          sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                        />
                      </IconButton>
                    </Box>
                  </Box>
                  <Box height="250px" m="-20px 0 0 0">
                    <LineChart />
                  </Box>
                </Box>
        </Box>
        
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default PlantDetailsPage;

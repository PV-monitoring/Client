import React, { useEffect, useState } from "react";
import { tokens } from "../theme";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Header from "../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { Box, IconButton, Typography } from "@mui/material";
import LineChart from "../components/LineChart";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import Gauge from "../components/Gauge"; 
import { DataGrid } from "@mui/x-data-grid";

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
    power: 0, // Add power state with initial value 0
  });

  useEffect(() => {
    // Extract plant details from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const name = urlParams.get("name");
    const location = urlParams.get("location");
    const capacity = urlParams.get("capacity");
    const status = urlParams.get("status");
    const power = parseInt(urlParams.get("power")) || 0; // Parse power as integer, default to 0 if not provided

    // Update plant details state
    setPlantDetails({ id, name, location, capacity, status, power });

    // Print plant details to the console
    console.log("Plant Details:", plantDetails);
  }, []);

  // Calculate progress as power divided by capacity
  const progress = plantDetails.capacity !== 0 ? plantDetails.power / plantDetails.capacity : 0;

  // Mock data for the data grid
  const inverterData = [
    { id: 1, name: "Inverter 1", SN: "SN1", power: 50, daily: 10, monthly: 300, total: 500 },
    { id: 2, name: "Inverter 2", SN: "SN2", power: 75, daily: 15, monthly: 450, total: 700 },
    // Add more mock data as needed
  ];

  // Columns for the data grid
  const columns = [
    { field: "name", headerName: "Inverter Name", flex: 1 },
    { field: "SN", headerName: "SN", flex: 1 },
    { field: "power", headerName: "Power", flex: 1 },
    { field: "daily", headerName: "Daily", flex: 1 },
    { field: "monthly", headerName: "Monthly", flex: 1 },
    { field: "total", headerName: "Total", flex: 1 },
  ];

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Box m="20px" width="90%">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Header title="Plant Details Page" subtitle={plantDetails.name} />
             
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                border={`1px solid ${colors.grey[300]}`}
                borderRadius="8px"
                padding="20px"
                boxShadow={`0px 4px 8px ${colors.grey[300]}`}
                maxWidth="400px"
                mb="20px" // Add margin bottom to create space between plant details and stat box
              >
                <Typography variant="h5" gutterBottom>
                  <b>Plant ID:</b> {plantDetails.id}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  <b>Plant Name:</b> {plantDetails.name}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  <b>Plant Location:</b> {plantDetails.location}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  <b>Capacity:</b> {plantDetails.capacity} kW
                </Typography>
                <Typography variant="h5" gutterBottom>
                  <b>Status:</b> {plantDetails.status}
                </Typography>
                <Box mt={2}>
                  <img src="path_to_your_image" alt="Plant Photo" style={{ maxWidth: "100%", borderRadius: "8px" }} />
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start" // Aligning content left
                justifyContent="space-between"
                ml="20px"
              >
                {/* Plant State  */}
                <Box
                  border={`1px solid ${colors.grey[300]}`}
                  borderRadius="8px"
                  padding="20px"
                  boxShadow={`0px 4px 8px ${colors.grey[300]}`}
                  maxWidth="400px"
                  mb="20px" // Add margin bottom to create space between plant details and stat box
                >
                  <Typography variant="h5" gutterBottom>
                    <b>Current Plant Condition</b>
                  </Typography>
                  {/* Render cloudy state information here */}
                  {/* For example: */}
                  <Typography variant="h5">
                    Cloudy
                  </Typography>
                </Box>
                {/* Gauge Component */}
                <Box
                  backgroundColor={colors.primary[400]}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Gauge
                    subtitle={`${plantDetails.power/1000} kW`} // Set title as the power value
                    title="Current Working Power"
                    progress={`${(plantDetails.power/1000)/plantDetails.capacity}`} // Pass the calculated progress
                    icon={
                      <OfflineBoltIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
                    }
                  />
                </Box>
              </Box>
              {/* Line Chart */}
              <Box
                height="300px"
                width="60%"
                border={`1px solid ${colors.grey[300]}`}
                display="flex"
                flexDirection="column"
                alignItems="flex-start" // Aligning content left
                p="20px"
              >
                <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                  Generation Gap
                </Typography>
                <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                  500 kWh
                </Typography>
                <IconButton style={{ marginLeft: "auto" }}> {/* Adjusting the style */}
                  <DownloadOutlinedIcon sx={{ fontSize: "26px", color: colors.greenAccent[500] }} />
                </IconButton>
                <Box height="100%" width="100%">
                  <LineChart />
                </Box>
              </Box>
            </Box>
            {/* Data Grid */}
            <Box
              m="40px 0 0 0"
              height="75vh"
              sx={{
                "& .MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: "none",
                },
                "& .name-column--cell": {
                  color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: colors.blueAccent[700],
                  borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                  borderTop: "none",
                  backgroundColor: colors.blueAccent[700],
                },
                // Remove checkbox styles
              }}
            >
              <DataGrid rows={inverterData} columns={columns} />
            </Box>
          </Box>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default PlantDetailsPage;

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
import { useJoinPlantRoom } from "../hooks/useJoinPlantRoom.js";
import { useEstimatedOutput } from "../hooks/useEstimatedOutput.js";
import { useCurrentDailyPowerGen } from "../hooks/useCurrentDailyPowerGen.js";
import { useCleaningCycleUpdate } from "../hooks/useCleaningCycleUpdate.js";

const PlantDetailsPage = () => {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  const [plantId, setPlantId] = useState("");
  const [plantName, setPlantName] = useState("");
  const [plantLocation, setPlantLocation] = useState("");
  const [plantCapacity, setPlantCapacity] = useState("");
  const [plantStatus, setPlantStatus] = useState("");
  const [plantPower, setPlantPower] = useState(0);

  const [powGenerationData, setPowGenerationData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/plant/getGenerationData`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPowGenerationData(data);
      });
  }, []);

  const todayPowerGenerationData = useCurrentDailyPowerGen();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setPlantId(urlParams.get("id"));
    setPlantName(urlParams.get("name"));
    setPlantLocation(urlParams.get("location"));
    setPlantCapacity(urlParams.get("capacity"));
    setPlantStatus(urlParams.get("status"));
    setPlantPower(parseInt(urlParams.get("power")) || 0);
  }, [plantId, plantName, plantLocation, plantCapacity, plantStatus, plantPower]);
  
  let inverterData = useJoinPlantRoom(plantName, plantId);
  let estimatedStatus = useEstimatedOutput();
  let cleaningCycleUpdate = useCleaningCycleUpdate();

  // Columns for the data grid
  const columns = [
    { field: "id", headerName: "id", flex: 1 },
    { field: "invertersn", headerName: "inverter SN", flex: 1 },
    { field: "status", headerName: "status", flex: 1 },
    { field: "power", headerName: "pv power", flex: 1 },
    { field: "daily", headerName: "daily generation", flex: 1 },
    { field: "total", headerName: "total generation", flex: 1 },
  ];

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Box m="20px" width="90%">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Header title="Plant Details Page" subtitle={plantName} />
             
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
                  <b>Plant ID:</b> {plantId}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  <b>Plant Name:</b> {plantName}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  <b>Plant Location:</b> {plantLocation}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  <b>Capacity:</b> {plantCapacity} kW
                </Typography>
                <Typography variant="h5" gutterBottom>
                  <b>Status:</b> {plantStatus}
                </Typography>
                {/* <Box mt={2}>
                  <img src="path_to_your_image" alt="Plant Photo" style={{ maxWidth: "100%", borderRadius: "8px" }} />
                </Box> */}
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
                    {estimatedStatus}
                  </Typography>
                </Box>
                {/* cleaning date  */}
                <Box
                  border={`1px solid ${colors.grey[300]}`}
                  borderRadius="8px"
                  padding="20px"
                  boxShadow={`0px 4px 8px ${colors.grey[300]}`}
                  maxWidth="400px"
                  mb="20px" // Add margin bottom to create space between plant details and stat box
                >
                  <Typography variant="h5" gutterBottom>
                    <b>Estimated Cleaning Date</b>
                  </Typography>
                  {/* Render cloudy state information here */}
                  {/* For example: */}
                  <Typography variant="h5">
                    {cleaningCycleUpdate}
                  </Typography>
                </Box>
                {/* Gauge Component */}
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Gauge
                    subtitle={`${plantPower/1000} kW`} // Set title as the power value
                    title="Current Working Power"
                    progress={`${(plantPower/1000)/plantCapacity}`} // Pass the calculated progress
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
                  Power Generation
                </Typography>
                {/* <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                  500 kWh
                </Typography> */}
                <IconButton style={{ marginLeft: "auto" }}> {/* Adjusting the style */}
                  <DownloadOutlinedIcon sx={{ fontSize: "26px", color: colors.greenAccent[500] }} />
                </IconButton>
                <Box height="100%" width="100%">
                  <LineChart powGenerationData={powGenerationData} todayPowerGenerationData={todayPowerGenerationData} />
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

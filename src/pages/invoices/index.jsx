import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { getMockDataInvoices, dynamicPlants } from "../../data/mockData";
import Header from "../../components/Header";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";

const Invoices = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const colors = tokens(theme.palette.mode);

  // Use the function to get dynamic data
  const dynamicData = dynamicPlants();
  // Call the function to get transformed data based on dynamic data
  const mockDataInvoices = getMockDataInvoices(dynamicData);

  // Function to handle row click
  const handleRowClick = (params) => {
    const { id, name, location, capacity, status } = params.row;
    // Open a new tab with the plant details page
    window.open(`/plant-details?id=${id}&name=${name}&location=${location}&capacity=${capacity}&status=${status}`, "_blank");
  };

  const columns = [
    // { field: "id", headerName: "Plant ID" },
    {
      field: "name",
      headerName: "Plant Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "location",
      headerName: "Plant Location",
      flex: 1,
    },
    {
      field: "capacity",
      headerName: "Capacity",
      flex: 1,
    },
    {
      field: "power",
      headerName: "Power",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Plant Status",
      flex: 1,
    },
    {
      field: "created_time",
      headerName: "Created Time",
      flex: 1,
    },
  ];

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Box m="20px">
              <Header title="Plant Information" subtitle="List of Solar Plants" />
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
                <DataGrid rows={mockDataInvoices} columns={columns} onRowClick={handleRowClick} />
              </Box>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Invoices;

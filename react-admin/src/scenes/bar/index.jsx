import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/Barchart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
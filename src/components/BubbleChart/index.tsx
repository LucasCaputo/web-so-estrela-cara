import React from "react";
import "./styles.css";

import { Box } from "@material-ui/core";

interface BubbleChartProps {
  revenue: number;
  cost: number;
  future: number;
}

const BubbleChart: React.FC<BubbleChartProps> = (props) => {
  return (
    <Box id="BubbleChart" display="flex">
      <Box className="bubble white revenue" width="180px" height="180px">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          R$ {props.revenue}
        </Box>
      </Box>

      <Box className="bubble white cost" width="120px" height="120px">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          R$ {props.cost}
        </Box>
      </Box>

      <Box className="bubble white future" width="130px" height="130px">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          R$ {props.future}
        </Box>
      </Box>
    </Box>
  );
};

export default BubbleChart;

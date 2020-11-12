import React from "react";
import "./styles.css";

import { Box, Paper } from "@material-ui/core";

interface CardProps {
  title: string;
  value: string;
  color: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <Paper id="Card">
      <Box display="flex" flexDirection="row" alignItems="center" height="100%">
        <Box className={props.color} width="8%" height="100%"></Box>

        <Box width="64%">
          <strong
            className="card-title"
            dangerouslySetInnerHTML={{ __html: props.title }}
          ></strong>
        </Box>

        <Box width="28%" className="card-value">
          {props.value} <span> R$</span>
        </Box>
      </Box>
    </Paper>
  );
};

export default Card;

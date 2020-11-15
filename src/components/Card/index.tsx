import React from "react";
import "./styles.css";

import { Box, Paper } from "@material-ui/core";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

interface CardProps {
  title: string;
  value: number;
  color: string;
  size: string;
  date?: string;
  handleRemove?: Function;
}

const Card: React.FC<CardProps> = ({ handleRemove, ...props }) => {
  return (
    <Paper id="Card" className={props.size}>
      <Box display="flex" flexDirection="row" alignItems="center" height="100%">
        <Box
          className={props.color}
          width={props.size === "medium" ? "8%" : "4%"}
          height="100%"
        ></Box>
        <Box width="64%">
          <strong
            className="card-title"
            dangerouslySetInnerHTML={{ __html: props.title }}
          ></strong>
          <p className="card-date">{props.date}</p>
        </Box>
        <Box width="28%" className="card-value">
          {props.value} <span> {props.size === "medium" ? "R$" : ""}</span>
        </Box>

        {props.size !== "medium" && handleRemove && (
          <DeleteForeverIcon
            className="icon"
            onClick={() => {
              if (handleRemove) {
                handleRemove();
              }
            }}
          />
        )}
      </Box>
    </Paper>
  );
};

export default Card;

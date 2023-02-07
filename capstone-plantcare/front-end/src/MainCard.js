
import React, { useState } from "react";
import Card from '@mui/material/Card';
import { Typography } from "@mui/material";

const MainCard = props => {

    const [mLvl, plantName, deviceID] = props.number;

    const oddEven = props.index % 2 == 0 ? "red":"blue";

    return (
      <Card style={{backgroundColor: oddEven}}>
        <Typography display="block">Plant Name: {plantName}</Typography>
        <Typography display="block">Current Moisture Level: {mLvl}</Typography>
        <Typography display="block">Device ID: {deviceID}</Typography>
      </Card>
    );
  };
  
  export default MainCard;
  
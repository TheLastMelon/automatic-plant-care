import React, { useState } from "react";
import BasicCard from "./BasicCard";
import { CardMedia, Grid, Stack } from "@mui/material";
import Popup from "./Popup";

const SideBar = props => {

    const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";

    return (
      <div className={sidebarClass}>
        <Grid container justifyContent="center">
          <BasicCard name="Add a Plant!"/>
        </Grid>
        <div>
          <button onClick={props.onClick} >Close Me!</button>
        </div>        
      </div>
    );
  }

  export default SideBar;
  
import React, { useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import "./StyleSheets/style.css";
import { Card } from '@mui/material';

function App() {

  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  return (
    <span >
      <Header onClick={handleViewSidebar} />
      <SideBar onClick={handleViewSidebar} isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    </span>
  );
}

export default App;

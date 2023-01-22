import React from "react";

const SideBar = props => {

    const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";

    return (
      <div className={sidebarClass}>
        Hello World!
      </div>
    );
  }

  export default SideBar;
  
import React, { useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import "./StyleSheets/style.css";
import { Card, Grid } from '@mui/material';
import MainCard from "./MainCard";

function App() {

  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);

    if(!sidebarOpen){
      setMarginSize("15%")
    }else{
      setMarginSize("0%")
    }
  };

  const [marginSize, setMarginSize] = useState("0%")

  const [cards, setCards] = useState([]);

  const addCard = (value) =>{
    const newCard = [...cards, value];

    setCards(newCard);

    console.log(newCard);
  }

  const temp = () => {

    if(sidebarOpen){
      return {marginRight: "80px"}
    }
  }

  const removeCard = (cardIndex) => {

    // create a new array without the item that you are removing
    const newCards = cards.filter((card, index) => index !== cardIndex);

    setCards(newCards);
  };

  return (
    <span >
      <Header onClick={handleViewSidebar} />
      <SideBar onClick={handleViewSidebar} isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} addCard={addCard}/>
      <div style={{marginTop: "70px", marginLeft: marginSize, transition: "left 1.3s ease-in-out"}}>
      {cards.map((cardNumber, index) => (
           <MainCard number={cardNumber} onRemove={() => removeCard(index)} index={index}/>
      ))}
      </div>
      
    </span>

   
  );
}

export default App;

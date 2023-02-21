import React, { useState, useEffect } from "react";
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

    //console.log(value.Show)

    if(value.Show == 0){

      console.log("This Card Will be Shown")
      
      /*
        Formating
        [name, deviceID, timesPerDay, timesPerWeek, timePerWatering]
      */
      const singleCard = [value.PlantName, value.DeviceID, value.TimesPerDay, value.TimesPerWeek, value.Duration]

      const newCard = [...cards, ["s", "s"]];

      setCards([...cards, newCard]);
  
      console.log("Current Value of Cards State:");
      console.log(newCard);
    }else{
      console.log("This Card Will Not be Shown");
    }

  }

  const temp = () => {

    if(sidebarOpen){
      return {marginRight: "80px"}
    }
  }

  const getCards = () =>{
    console.log("get Card Function Called");

    setCards([]);

    fetch('https://h2bros.ddns.net/cards')
         .then((response) => response.json())
         .then((data) => {
            console.log("======== Got the Data From Server ========")
            console.log(data);
            console.log("======== End of the Data ========")
            var c = []
            for(let i = 0; i < Object.keys(data).length; i++){
              //addCard(data[1]);
              var singleCard = [data[i].PlantName, data[i].DeviceID, data[i].TimesPerDay, data[i].TimesPerWeek, data[i].Duration]
               c = [...c, singleCard]
              console.log("New Card:")
              console.log(c)
            }

            setCards(c);
         })
         .catch((err) => {
            console.log(err.message);
         });
  }

  const removeCard = (cardIndex) => {

    // create a new array without the item that you are removing
    const newCards = cards.filter((card, index) => index !== cardIndex);

    setCards(newCards);
  };

  return (
    <span onLoad={getCards}>
      <Header onClick={handleViewSidebar} />
      <SideBar onClick={handleViewSidebar} isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} addCard={addCard} getCard={getCards}/>
      <div style={{marginTop: "70px", marginLeft: marginSize, transition: "left 1.3s ease-in-out"}}>
      {cards.map((cardNumber, index) => (
           <MainCard number={cardNumber} onRemove={() => removeCard(index)} index={index} />
      ))}
      </div>
      
    </span>

   
  );
}

export default App;

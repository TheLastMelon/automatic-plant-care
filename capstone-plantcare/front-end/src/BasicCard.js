import React,{useState} from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Popups from './Popup';


const BasicCard = props => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
 
    const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
      console.log("Toggling the Popup.")
    }

    const [name, setName] = useState('');
    const [moistureLvl, setMoistureLvl] = useState('');
    const [deviceID, setDeviceID] = useState('');

    const handleSubmit = (e) => {

      // IDK
      e.preventDefault();

      /** Testing to make sure the moisture level only contains numbers */
      if(/^\d+$/.test(moistureLvl)){

        // Testing our data collection by printing it to the console
        console.log(`Form Submitted, ${name} with a required Moisture Level of ${moistureLvl}`)

        //Closing the Popup upcon submition
        togglePopup();

        props.addCard([moistureLvl, name, deviceID]);
      }else{

        // The Moisture Level Contains non-digits.
        console.log('Please Enter Only Numbers');
      }
    }
  
    
  
  return (
    <div >
        <Card onClick={togglePopup} sx={{ minWidth: 150, maxWidth: 150} }>
            <CardActionArea>
                <Typography>{props.name}</Typography>
            </CardActionArea>
        </Card>
        {isPopupOpen && <Popups onClick={togglePopup} content={<>
          <form onSubmit={handleSubmit}>
            <label>
              Plant Name:
              <input type="text" onChange = {(e) => setName(e.target.value)} value={name}></input>
            </label>
            <br></br>
            <label>
              Device ID:
              <input type="text" onChange = {(e) => setDeviceID(e.target.value)} value={deviceID}></input>
            </label>
            <br></br>
            <label>
              Moisture Level:
              <input type="text" onChange = {(e) => setMoistureLvl(e.target.value)} value={moistureLvl}></input>
            </label>
            <br></br>
            <button type="submit">Submit Data!</button>
            
          </form>
      </>}
    />}
    </div>
  );
}

export default BasicCard;
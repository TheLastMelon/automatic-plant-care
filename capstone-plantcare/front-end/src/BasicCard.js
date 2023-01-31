import React,{useState} from 'react';
import Popup from 'reactjs-popup';
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
  
    
  
  return (
    <div >
        <Card onClick={togglePopup} sx={{ minWidth: 150, maxWidth: 150} }>
            <CardActionArea>
                <Typography>{props.name}</Typography>
            </CardActionArea>
        </Card>
        {isPopupOpen && <Popups onClick={togglePopup} content={<>
          <form>
            <label>
              Plant Name:
              <input type="text"></input>
            </label>
            
          </form>
      </>}
    />}
    </div>
  );
}

export default BasicCard;
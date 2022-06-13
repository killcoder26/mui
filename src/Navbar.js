import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import 'animate.css';
import IconButton from '@mui/material/IconButton';
import { RiHomeSmileLine } from "react-icons/ri";
import Clock from 'react-live-clock';
import { IoPartlySunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";


function Navbar() {

  const time = new Date().getHours();
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <RiHomeSmileLine
              style={{ '&:hover': { color: 'yellow', }, }} />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Hello, <Typography sx={{
              fontSize: 32, color: "orangered"
            }} id="animated" >Everyone</Typography>
          </Typography>
          <div className="greet">{time >= 12 ? time >= 16 ? <div>Good Evening <IoMoonOutline /></div> : <div>Good AfterNoon </div> : <div>Good Morning <IoPartlySunnyOutline /></div>}</div>
          <div id='time'><Typography sx={{ color: "orangered", fontSize: 22, fontFamily: "Comic Sans MS" }} ><Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Kolkata'} id="time" /></Typography></div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
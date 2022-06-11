import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import 'animate.css';
import IconButton from '@mui/material/IconButton';
import { RiHomeSmileLine } from "react-icons/ri";
import Clock from 'react-live-clock';





function Navbar() {


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
          <Typography sx={{ color: "orangered", fontSize: 22, fontFamily: "Comic Sans MS" }} ><Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Kolkata'} id="time" /></Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
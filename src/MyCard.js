import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Button, CardActionArea } from '@mui/material';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
//import { makeStyles } from "tss-react/mui";

// const myTheme = createTheme({
//     palette: {
//         primary: {
//             main: orange[400],
//         },
//         secondary: {
//             main: '#11cb5f',
//         }
//     },
// });

// const useStyles = makeStyles()((theme) => {
//     return {
//         button: {

//         },
//         card: {
//             color: '#11cb5f',
//         },
//     };
// });



function MyCard() {
    //  const { classes } = useStyles();
    const [colo, setcolor] = useState("#fdf0d5");
    const [colo2, setcolor2] = useState("#ABE188");
    const [i, setI] = useState(0);
    const [j, setJ] = useState(0);
    const change = () => {
        const arr = ["#DEB986", '#D0CFEC', '#FCF300', '#FFB7FF', '#7692FF', '#d00000', '#e9d8a6', '#ABE188', '#F78E69', '#51D4EB'];

        if (i >= 0 && i < arr.length) {
            setcolor(arr[i]);
            setI(i + 1);
        }
        else {
            setI(0); //reset colors array
        }
    }

    const change2 = () => {

        const arr = ["#f77f00", '#560bad', '#FCF300', '#f8ad9d', '#7692FF', '#d00000', '#e9d8a6', '#ABE188', '#F78E69', '#51D4EB'];
        if (j >= 0 && j < arr.length) {
            setcolor2(arr[j]);
            setJ(j + 1);
        }
        else {
            setJ(0); //reset colors array
        }
    }



    return (
        //<ThemeProvider theme={myTheme}>
        <Box component="div" sx={{ backgroundColor: colo, height: '80vh', paddingTop: 2 }}>
            <center><Card sx={{ maxWidth: '90vh', height: '70vh', backgroundColor: colo2, }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image="https://res.cloudinary.com/mycloud2604/image/upload/v1655094353/cartoon-dog_u249q1.gif"
                        alt="child"
                    />
                    <CardContent>
                    </CardContent>
                    <Button variant="contained"
                        sx={{
                            '&:hover': { boxShadow: 3, backgroundColor: orange[400], },
                            color: "white", backgroundColor: "black", borderRadius: 3
                        }} onClick={change} >Switch Backgrounds</Button>
                    <Button variant="contained"
                        sx={{
                            '&:hover': { boxShadow: 3, backgroundColor: '#11cb5f', },
                            color: "white", backgroundColor: "black", borderRadius: 3, marginLeft: 2
                        }}
                        onClick={change2} >Switch Card</Button>
                </CardActionArea>
            </Card></center>
        </Box >
        //  </ThemeProvider>
    )
}

export default MyCard
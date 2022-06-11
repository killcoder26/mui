import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Button, CardActionArea } from '@mui/material';



function MyCard() {
    const [colo, setcolor] = useState("#fdf0d5");
    const [colo2, setcolor2] = useState("#ABE188");
    const [i, setI] = useState(0);
    const [j, setJ] = useState(0);
    const change = () => {
        const arr = ["#DEB986", '#D0CFEC', '#FCF300', '#FFB7FF', '#7692FF', '#d00000', '#ABE188', '#F78E69', '#51D4EB'];

        if (i >= 0 && i < arr.length) {
            setcolor(arr[i]);
            setI(i + 1);
        }
        else {
            setI(0); //reset colors array
        }
    }

    const change2 = () => {

        const arr = ["#f77f00", '#560bad', '#FCF300', '#f8ad9d', '#7692FF', '#d00000', '#ABE188', '#F78E69', '#51D4EB'];
        if (j >= 0 && j < arr.length) {
            setcolor2(arr[j]);
            setJ(j + 1);
        }
        else {
            setJ(0); //reset colors array
        }
    }



    return (
        <Box component="div" sx={{ backgroundColor: colo, height: '80vh', paddingTop: 2 }}>
            <center><Card sx={{ maxWidth: '90vh', height: '70vh', backgroundColor: colo2, }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image="https://res.cloudinary.com/mycloud2604/image/upload/v1654938648/dl.beatsnoop.com-1654938626_gxpxnp.jpg"
                        alt="child"
                    />
                    <CardContent>
                    </CardContent>
                    <Button variant="contained" sx={{ backgroundColor: "black", '&:hover': { backgroundColor: "orange" }, borderRadius: 10 }} onClick={change} >Switch Backgrounds</Button>
                    <Button variant="contained" sx={{ backgroundColor: "black", '&:hover': { backgroundColor: "#560bad" }, borderRadius: 10, marginLeft: 2 }} onClick={change2} >Switch Card</Button>
                </CardActionArea>
            </Card></center>
        </Box >
    )
}

export default MyCard
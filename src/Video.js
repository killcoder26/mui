import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Button, CardActionArea, Typography } from '@mui/material';

function Video() {
    return (
        <div className="container">
            <Box sx={{ width: '100vh', maxHeight: '75vh' }}>
                <Card sx={{ backgroundColor: '#C5C5C5' }}>
                    <CardActionArea>
                        <Typography sx={{ margin: 2 }}>Interaction ...</Typography>
                        <video width="450" height="240" controls>
                            <source src="https://res.cloudinary.com/mycloud2604/video/upload/v1654959708/coverr-60-new-zealand-sunset-moon-beach-hollow-waves-6051_ibkwxr.mp4" type="video/mp4" />
                        </video>
                        <CardContent>
                        </CardContent>
                        <Button variant="contained" sx={{ marginLeft: 52, marginBottom: 7 }}>B1</Button>
                    </CardActionArea>
                </Card>
            </Box >

            <Box sx={{ width: '100vh', maxHeight: '80vh' }}>
                <Card sx={{}}>
                    <CardActionArea>
                        <Typography sx={{ margin: 2 }}>Video Questionnaire</Typography>
                        <Box sx={{ width: '60vh', height: '48vh', backgroundColor: '#C5C5C5', marginLeft: 5 }}>
                            ...
                        </Box>
                        <CardContent>
                        </CardContent>
                        <Button variant="contained" sx={{ marginLeft: 52, marginBottom: 10 }}>B2</Button>
                    </CardActionArea>
                </Card>
            </Box >
        </div >
    )
}

export default Video
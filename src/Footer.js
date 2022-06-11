import { Typography } from '@mui/material'
import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
    return (
        <div >
            <Typography sx={{ padding: 1, fontFamily: "Comic Sans MS", color: '#EDEDED' }}  >
                <CopyrightIcon sx={{ color: 'white', fontSize: 12 }} /> All rights reserved
            </Typography>

        </div>
    )
}

export default Footer
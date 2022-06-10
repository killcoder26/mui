import { makeStyles } from "tss-react/mui";
import Button from "@mui/material/Button";
import React from "react";
import { Typography } from "@mui/material";

const useStyles = makeStyles()((theme) => {
    return {
      root: {
        color: "cyan",
      },
     apply: {
       color:"blueviolet",
      },
    };
  });
 

function Mystyle() {
    const { classes } = useStyles();
  return (
  <div>
      <Typography className={classes.apply} sx={{marginLeft:30}} > Hey Everyone</Typography>
  </div>
  );
}

export default Mystyle;

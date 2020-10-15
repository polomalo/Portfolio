import React from 'react';
import {  Container, Grid, Paper, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo512 from './logo512.png';


const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow: 1
  },
  leftPart: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },

}));

export default function LeftPart(){
    const classes = useStyles();
    return (
      <Grid item xs={8} sm={3}>
        <Paper className={classes.leftPart}>
          <img src={logo512} alt="leftPartPhoto" />
          <Box>
            <h1>Kirkitsky Dmitry</h1>
            <h2>Front-End Developer</h2>
          </Box>
        </Paper>
      </Grid>
    )
}

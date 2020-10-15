import React from 'react';
import {  Container, Grid, Paper, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow: 1,
    marginTop: theme.spacing(4)
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  rightPart: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(4)
  },
}));


export default function About(){
    const classes = useStyles();
    return (
      <Grid item sm={12}>
        <Paper className={classes.rightPart}>
          <h1>About</h1>
        </Paper>
      </Grid>
    )
}

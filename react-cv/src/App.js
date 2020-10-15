import React from 'react';
import './App.css';
import LeftPart from './components/leftPart/LeftPart';
import RightPart__Nav from './components/rightPart__nav/RightPart__Nav';
import { AppBar, Container, Toolbar, IconButton, Typography, Grid, Paper} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root:{
    marginTop: theme.spacing(4)
  }
}));


function App() {
  const classes = useStyles();
  return (
    <Container fixed className={classes.root}>
      <Grid container spacing={4}>
        <LeftPart />
        <RightPart__Nav />
      </Grid>
    </Container>
  );
}

export default App;

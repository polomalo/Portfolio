import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {  Container, Grid, Paper, Box, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import { makeStyles } from '@material-ui/core/styles';
import About from '../rightPart__content/rightPart__content--About/About';
import Resume from '../rightPart__content/rightPart__content--Resume/Resume';
import Portfolio from '../rightPart__content/rightPart__content--Portfolio/Portfolio';
import Contact from '../rightPart__content/rightPart__content--Contact/Contact';


const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex"
  },
  nav__item:{
    textAlign: "center",
    justifyContent:'center',
    fontSize: 22,
    borderRight: "2px solid red"
  },
  nav__icon:{
    marginRight: theme.spacing(2),
    color: "blue",
    fontSize: 26
  },
  rightPart: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },

}));

export default function RightPart__Nav(){
    const classes = useStyles();

    return (
      <Grid item xs={10} sm={9}>
        <Router>
            <Paper >
                <List className={classes.nav}>
                  <Link to="/about"><ListItem className={classes.nav__item}>
                    <FolderIcon className={classes.nav__icon}/>
                    About
                  </ListItem></Link>
                  <ListItem className={classes.nav__item}>
                    <FolderIcon className={classes.nav__icon}/>
                    <Link to="/resume">Resume</Link>
                  </ListItem>
                  <ListItem className={classes.nav__item}>
                    <FolderIcon className={classes.nav__icon}/>
                    <Link to="/portfolio">Portfolio</Link>
                  </ListItem>
                  <ListItem className={classes.nav__item} style={{borderRight: "none"}}>
                    <FolderIcon className={classes.nav__icon}/>
                    <Link to="/contact">Contact</Link>
                  </ListItem>
                </List>
            </Paper>

              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
              </Switch>

          </Router>
        </Grid>
    )
}

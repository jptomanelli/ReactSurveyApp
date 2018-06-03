import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';


const styles = theme => ({
  circleButton: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 2, 
  }
});


class Dashboard extends Component {
  render() {

    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.grid}>
            <Typography className={classes.title} variant="title" color="inherit">List of Surveys</Typography>
            <SurveyList />
        </Grid>
      </Grid>
      <Button component={Link} to="/surveys/new" variant="fab" color="primary" aria-label="add" className={classes.circleButton}>
        <AddIcon />
      </Button>
      </div>
    );
  }
};

export default withStyles(styles, { withTheme: true })(Dashboard);
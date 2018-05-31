import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from "react-router-dom";
import * as actions from '../../actions';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history, classes }) => {

  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <List key={label} component="div">
        <ListItem >
          <ListItemText primary={label} secondary={formValues[name]} />
        </ListItem >
        <Divider />
      </List>
    );
  });

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="title" color="inherit">Please confirm your entries</Typography>
            {reviewFields}
            <Button variant="raised" color="secondary" className={classes.button} onClick={onCancel}>
              Back
            </Button>
            <Button variant="raised" color="primary" className={classes.button} onClick={() => submitSurvey(formValues, history)}>
              Send Survey
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(
  withRouter(
    withStyles(styles)(SurveyFormReview)
  )
);
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from "react-router-dom";
import * as actions from '../../actions';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history, classes }) => {

  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div className="container">
      <h5>Please confirm your entries</h5>
        {reviewFields}
      <Button 
        variant="raised"
        color="secondary"
        className={classes.button}
        onClick={onCancel}>
        Back
      </Button>
      <Button 
        variant="raised"
        color="primary"
        className={classes.button}
        onClick={() => submitSurvey(formValues, history)}>
          Send Survey
      </Button>
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
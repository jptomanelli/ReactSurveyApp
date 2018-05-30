import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class SurveyForm extends Component {

  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
    })
  }

  render() {

    const { classes } = this.props;

    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Button variant="raised" color="secondary" component={Link} to="/surveys" className={classes.button}>
            Cancel
          </Button>
          <Button variant="raised" color="primary" type="submit" className={classes.button}>
            Next
          </Button>
        </form>
      </div>
    );
  }
};

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ name, label }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${label}`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
}) (
  withStyles(styles)(SurveyForm)
);
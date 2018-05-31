import React from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  input: {
    marginTop: theme.spacing.unit * 2
  }
});

const SurveyField = ({ input, label, meta: { error, touched }, classes }) => {
  const ariaDescribedBy = input.name + '-text';
    return (
      <div>
        <FormControl className={classes.input} fullWidth {...input} aria-describedby={ariaDescribedBy} error={error && touched}>
          <InputLabel htmlFor={input.name}>{label}</InputLabel>
          <Input id={input.name}></Input>
          <FormHelperText id={ariaDescribedBy}>{touched && error}</FormHelperText>
        </FormControl>
      </div>
    );
};

export default withStyles(styles)(SurveyField);
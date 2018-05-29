import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  circleButton: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

class Dashboard extends Component {
  render() {

    const { classes, theme } = this.props; 

    return (
      <div className="container">
        <SurveyList />
        <div className="fixed-action-btn">
          <Button component={Link} to="/surveys/new" variant="fab" color="primary" aria-label="add" className={classes.circleButton}>
            <AddIcon />
          </Button>
        </div>
      </div>
    );
  }
};

export default withStyles(styles, { withTheme: true })(Dashboard);
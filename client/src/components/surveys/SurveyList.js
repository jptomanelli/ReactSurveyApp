import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class SurveyList extends Component {

  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {

    const { classes } = this.props;

    return this.props.surveys.reverse().map(survey => {
      return (
        <Card key={survey.id}>
          <CardContent className={classes.card}>
            <Typography variant="headline">{survey.title}</Typography>
            <Typography >{survey.body}</Typography>
            <Typography>Sent On: {new Date(survey.dateSent).toLocaleDateString()}</Typography>
            <Typography>Yes: {survey.yes} No: {survey.no}</Typography>
          </CardContent>
        </Card>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(
  withStyles(styles)(SurveyList)
);
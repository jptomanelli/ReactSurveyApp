import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#7bd9ff",
      main: "#3ea8e5",
      dark: "#0079b3",
    },
    secondary: {
      light: "#ff9db1",
      main: "#e56c82",
      dark: "#af3c56",
    },
  },
  status: {
    danger: 'orange',
  },
});

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <div>
              <Header />
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route path="/surveys/new" component={SurveyNew} />
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default connect(null, actions)(App);
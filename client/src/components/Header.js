import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderMenu from './HeaderMenu';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
    overflow: 'auto',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    float: "right",
  },
};

class Header extends Component {

  render() {
    const { classes } = this.props;
    return (
      <nav className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography className={classes.flex} variant="title" color="inherit">
              <Link className="black-text" to={this.props.auth ? '/surveys' : '/'}>
                Email.io
              </Link>
            </Typography>
            <HeaderMenu className={classes.menuButton}>
            </HeaderMenu>
          </Toolbar>
        </AppBar>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(withStyles(styles)(Header));

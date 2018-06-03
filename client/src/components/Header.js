import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderMenu from './HeaderMenu';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const styles = {
  root: {
    flexGrow: 1,
    overflow: 'auto',
  },
  flex: {
    flex: 1,
    textDecoration: 'none',
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
      <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <HeaderMenu />
          </IconButton>
          <Typography component={Link} to={this.props.auth ? '/surveys' : '/'} variant="title" color="inherit" className={classes.flex}>
            Email.io
          </Typography>
          {/*<Button color="inherit">Login</Button>*/}
        </Toolbar>
        
      </AppBar>
        
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(withStyles(styles)(Header));
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payments from './Payments';

import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  menu: {
    float: "right",
  }
};

class HeaderMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      anchor: null,
      classes: props.classes
    };
  }

  handleClick = e => {
    this.setState({ anchor: e.currentTarget });
  };

  handleClose = e => {
    this.setState({ anchor: null });
  };

  renderDropDown() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <MenuItem onClick={this.handleClose}><a className="black-text" href="/auth/google">Login with Google</a></MenuItem>
        );
      default:
        return [
          <MenuItem key="1" disabled={true} onClick={this.handleClose}>Credits: {this.props.auth.credits}</MenuItem>,
          <MenuItem key="2" ><Payments/></MenuItem>,
          <MenuItem key="3" onClick={this.handleClose}><a className="black-text" href="/api/logout" >Logout</a></MenuItem>
        ];
    }
  };

  render() {
    const { anchor, classes } = this.state;
    return (
      <div className={classes.menu}>
        <IconButton 
          className={classes.menuButton} 
          color="inherit" 
          aria-label="Menu"
          aria-owns={anchor ? 'header-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="header-menu"
          anchorEl={anchor}
          open={Boolean(anchor)}
          onClose={this.handleClose}
        >

          {this.renderDropDown()}
        </Menu>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(withStyles(styles)(HeaderMenu));
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

    renderDesktop() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a className="black-text" href="/auth/google">Login with Google</a></li>
                );
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="2" style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
                    <li key="3"><a className="black-text" href="/api/logout" >Logout</a></li>
                ];
        }
    }

    renderMobile() {
        switch (this.props.auth) {
            case null:
            case false:
            default:
                return;
        }
    }

    render() {
        return (
            <nav className="nav-bar green lighten-5">
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className="black-text email-brand-logo brand-logo left">
                        <i className="material-icons">email</i>
                        Email.io
                    </Link>
                    <ul className="right black-text hide-on-small-and-down">
                        {this.renderDesktop()}
                    </ul>
                    <a data-target="mobile-navbar" className="right black-text hide-on-med-and-up sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="displayNone" id="mobile-navbar">
                        {this.renderMobile()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions';
import './Header.scss';

class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <header className="header">
        <div className="header-wrapper">
          {user && <img src={user.avatar} alt="头像" />}
          {user && <span className="username">{user.name}</span>}
          <a className="sign" onClick={user === undefined ? this.props.signIn : this.props.signOut}>
            {user === undefined ? 'Sign in' : 'Sign out'}
          </a>
        </div>
      </header>
    );
  }
}
const mapStateToProps = ({ user, isLogin }) => ({ user, isLogin });

const mapDispatchToProps = dispatch => ({
  signIn() {
    fetch(`https://my-json-server.typicode.com/kevindongzg/demo/login`, { method: 'GET' })
      .then(res => res.json())
      .then(json => dispatch(setUser(json)));
  },
  signOut() {
    dispatch(setUser(undefined));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

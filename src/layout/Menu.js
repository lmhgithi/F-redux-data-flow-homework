import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { menuOptions } from '../utils';
import { connect } from 'react-redux';
import './Menu.scss';

class Menu extends Component {
  render() {
    const { user } = this.props;
    console.log(this.props);
    return (
      <nav className="menu">
        <ul>
          <li className="nav-item">
            <Link to="/">首页</Link>
          </li>
          {user === undefined
            ? menuOptions.map(
                ({ name, path }) =>
                  name === '报表' && (
                    <li className="nav-item" key={name}>
                      <Link to={path}>{name}</Link>
                    </li>
                  )
              )
            : menuOptions.map(
                ({ name, path }) =>
                  name != '报表' && (
                    <li className="nav-item" key={name}>
                      <Link to={path}>{name}</Link>
                    </li>
                  )
              )}
        </ul>
      </nav>
    );
  }
}
const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Menu);

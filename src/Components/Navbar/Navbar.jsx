import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import "antd/dist/antd.css";
import { withRouter } from 'react-router-dom';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar(props) {

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" onClick={logout}>Logout</a>
      </Menu.Item>
    </Menu>
  );

  function logout() {
    localStorage.removeItem('TokenUser');
    props.history.push('/auth/login');
  }

  return (
    <div className="nav-bar">
      <div className="nav-left">
        <img src={'https://maximum-tent-36.media-cdn.io/assets/img/logo-white.0ad67.png'}/>
      </div>
      <div className="nav-right">
        <Link to={'/'}>
          <span className="home cursor-pointer">
            <i className="fas fa-home icon-nav"></i>
            <span className="title-home">Home</span>
          </span>
        </Link>

        <i className="fas fa-user icon-nav icon-nav-user cursor-pointer"></i>
        <Dropdown overlay={menu} className="cursor-pointer">
          <span className="ant-dropdown-link drop-down">
            Admin <Icon type="down" />
          </span>
        </Dropdown>

      </div>
    </div>
  );
}

export default withRouter(NavBar);

import React from 'react';
import './SideBar.css';
import { Link, withRouter } from 'react-router-dom';

import {
  Layout, Menu
} from 'antd';

const { Sider } = Layout;

function SideBar() {

  return (
    <div className="side-bar-container">
      <Sider width={300} className="side-bar">
        <div className="title-sidebar">System Management</div>
        <Menu theme="light" mode="inline">

          <Menu.Item key="1" className="side-bar-items">
            <Link to={'/user-management'}><span className="sidebar-item">User Management</span></Link>
          </Menu.Item>

          <Menu.Item key="2" className="side-bar-items">
            <Link to={'/role-permission'}><span className="sidebar-item">Role Permission</span></Link>
          </Menu.Item>

          <Menu.Item key="3" className="side-bar-items">
            <Link to={'/system-setting'}><span className="sidebar-item">System Setting</span></Link>
          </Menu.Item>

        </Menu>
      </Sider>
    </div>
  );
}

export default withRouter(SideBar);

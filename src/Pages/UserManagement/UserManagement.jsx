import React from 'react';
import './UserManagement.css';
import { Menu, Dropdown, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
import FilterableUserTable from "./FilterableUserTable/FilterableUserTable";

function UserManagement() {

  const menu = (
    <Menu>
      <Menu.Item>
        <a rel="noopener noreferrer" href="https://reactjs.org/">Other</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="user-management-container">
      <h3 className="title-management">User Management</h3>

      <span className="create-user">
        <Dropdown overlay={menu} className="cursor-pointer btn-other-feature">
          <span className="ant-dropdown-link drop-down">
            Other <Icon type="down"/>
          </span>
        </Dropdown>

        <Button className="btn-create-user">
          <Link to={'/user-management/create-user'}>
            <i className="fas fa-plus icon-plus"></i> Create
          </Link>
        </Button>
      </span>
      <br/><br/>
      <hr className="hr"/>
      <br/>

      <FilterableUserTable/>

    </div>
  );
}

export default UserManagement;

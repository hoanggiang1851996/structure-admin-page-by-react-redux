import React from 'react';
import './DashBoard.css';
import {Button} from "antd";
import { Link } from 'react-router-dom';

function Dashboard() {

  return (
    <div className="dashboard-container">
      <h1 className="title-welcome">Welcome, Giang Ta Hoang</h1>
      <div className="text-center">
        <Link to={'/user-management'}>
          <Button className="btn-direct">Go to User Management</Button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;

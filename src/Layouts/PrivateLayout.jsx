import React from 'react';
import {
  Layout
} from 'antd';
import NavBar from "../Components/Navbar/Navbar";
import SideBar from "../Components/SideBar/Sidebar";

function PrivateLayout(props) {
  const Component = props.component;
  const route = props;
  return (
    <Layout className="dashboard-container">
      <NavBar/>

      <Layout>
        <SideBar/>
        <Layout>
          <div >
            <Component route={route}/>
          </div>
        </Layout>

      </Layout>

    </Layout>
  );
}

export default PrivateLayout;

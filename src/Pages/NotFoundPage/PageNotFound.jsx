import React from 'react';
import './PageNotFound.css'
import { Link } from "react-router-dom";
import { Button } from 'antd';

function PageNotFound() {
  return (
    <div>
      <h1 className="title-404 text-center">404 Error Page</h1>
      <div className="text-center">
        <Link to={'/'}>
          <Button type="primary">Return to the home page</Button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;

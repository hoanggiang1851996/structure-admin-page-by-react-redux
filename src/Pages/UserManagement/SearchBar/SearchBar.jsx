import React from 'react';

import {
  Form, Input, Row, Col, Button
} from 'antd/lib/index';

function SearchBar(props) {

  const { form } = props;
  const { getFieldDecorator } = form;

  function onSubmit(e) {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  }

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col span={5} className="col-search">
            <Form.Item label="User ID">
              {getFieldDecorator('userID')(<Input/>)}
            </Form.Item>
          </Col>

          <Col span={5} className="col-search">
            <Form.Item label="First name">
              {getFieldDecorator('firstName')(<Input/>)}
            </Form.Item>
          </Col>

          <Col span={5} className="col-search">
            <Form.Item label="Last name">
              {getFieldDecorator('lastName')(<Input/>)}
            </Form.Item>
          </Col>

          <Col span={5} className="col-search">
            <Form.Item label="Role">
              {getFieldDecorator('role')(<Input/>)}
            </Form.Item>
          </Col>

          <Col span={2}>
            <Button className="btn-search" htmlType="submit">
              <i className="fas fa-search icon-search"></i> Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

const WrappedSearchBar = Form.create()(SearchBar);
export default WrappedSearchBar

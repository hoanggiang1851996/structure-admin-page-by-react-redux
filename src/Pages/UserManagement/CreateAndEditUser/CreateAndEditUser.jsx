import React, {useEffect} from 'react';
import {Link, withRouter} from "react-router-dom";
import './CreateAndEditUser.css';
import { connect } from 'react-redux';

import {
  Form, Select, Input, Button,
} from 'antd';
import {createUser, createUserSuccess, createUserFailure, fetchUser} from "../../../Actions/UserActions";
import AlertError from "../../../Services/Alert/AlertError";
import AlertSuccess from "../../../Services/Alert/AlertSuccess";

const { Option } = Select;

function CreateAndEditUser(props) {

  const userId = props.match.params.id;

  useEffect(() => {
    if (userId) {
      props.fetchUser(userId);
    }
    return () => {
      props.fetchUser(userId);
    }

  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.createUser(values);
        props.form.resetFields();
        AlertSuccess('Create user successfully');
      } else {
        AlertError('Create user failed');
      }
    });
  }

  const { getFieldDecorator } = props.form;


  return (
    <div className="create-user-container">
      {props.match.params.id !== undefined && <h3 className="title-create-user">Edit user</h3>}
      {props.match.params.id === undefined && <h3 className="title-create-user">Create user</h3>}

      <span className="create-user">
        <Button className="btn-cancel">
          <Link to={'/user-management'}>
            <i className="fas fa-ban"></i> Cancel
          </Link>
        </Button>
        <Button className="btn-save-user" onClick={handleSubmit}>
            <i className="far fa-save"></i> <span className="btn-save">Save</span>
        </Button>
      </span>
      <br/><br/>
      <hr className="hr"/>
      <br/>

      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 24 }}>

        <Form.Item label="User ID">
          {getFieldDecorator('userID', {
            rules: [{ required: true, message: 'Please input your id!' }],
          })(
            <Input />
          )}
        </Form.Item>

        <Form.Item label="First name">
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: 'Please input your first name!' }],
          })(
            <Input />
          )}
        </Form.Item>

        <Form.Item label="Last name">
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: 'Please input your last name!' }],
          })(
            <Input />
          )}
        </Form.Item>

        <Form.Item label="Email">
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input />
          )}
        </Form.Item>

        <Form.Item label="Role">
          {getFieldDecorator('role', {
            rules: [{ required: true, message: 'Please select your role!' }],
          })(
            <Select placeholder="Choose an option">
              <Option value="Admin">Admin</Option>
              <Option value="Operator">Operator</Option>
              <Option value="Approver">Approver</Option>
              <Option value="Creator">Creator</Option>
              <Option value="Authorizer">Authorizer</Option>
              <Option value="Customer User">Customer User</Option>
            </Select>
          )}
        </Form.Item>

      </Form>

    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: (values) => {
      dispatch(createUser(values)).then((response) => {
        !response.error ? dispatch(createUserSuccess(response.payload.data)) :
          dispatch(createUserFailure(response.payload.data));
      });
    },
    fetchUser: (userId) => dispatch(fetchUser(userId))
  }
}

function mapStateToProps(state) {
  return { userDetail: state.user };
}

const WrappedCreateUser = Form.create()(CreateAndEditUser);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedCreateUser));

import React from 'react';
import 'antd/dist/antd.css';
import './Auth.css'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';

import AlertSuccess from '../../Services/Alert/AlertSuccess';
import AlertError from "../../Services/Alert/AlertError";

function Login(props) {

  const { form } = props;
  const { getFieldDecorator } = form;

  function onSubmit(e) {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        sendDataToLogin(values);
      }
    });
  }

  function sendDataToLogin(values) {
    //getAPI return promise set token to Localstorage
    if (true) {
      localStorage.setItem('TokenUser', 'ok');
      AlertSuccess('Login Successfully');
      props.history.push('/');
    } else {
      AlertError('Login failed');
    }
  }

  return (
    <div className="container-form">
      <div className="container-form-2">
        <h1 className="title-login">LOGIN TO WEBSITE</h1>

        <Form className="auth-form" onSubmit={onSubmit}>

          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{required: true, message: 'Please input your username!'}],
            })(
              <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{required: true, message: 'Please input your Password!'}],
            })(
              <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                     placeholder="Password"/>
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox className="remember-checkbox">Remember me</Checkbox>
            )}
            <a className="login-form-forgot">Forgot password</a>
            <Button type="primary" htmlType="submit" className="auth-form-button">
              Log in
            </Button>
            Or <Link to="/auth/register">Register now!</Link>
          </Form.Item>

        </Form>

      </div>
    </div>
  );
}

const WrappedLogin = Form.create()(Login);
export default withRouter(WrappedLogin)

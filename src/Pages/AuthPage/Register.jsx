import React from 'react';
import {Form, Input, Button, DatePicker} from "antd";
import './Auth.css';
import 'antd/dist/antd.css';
import AlertSuccess from "../../Services/Alert/AlertSuccess";
import AlertError from "../../Services/Alert/AlertError";
import { withRouter } from 'react-router-dom';
import * as validator from '../../Utils/Validators/Validators'

function Register(props) {
  const {form} = props;
  const {getFieldDecorator} = form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
  };

  function onSubmit(e) {
    e.preventDefault();
    form.validateFields((err, values) => {

      const format = {
        ...values,
        'dateOfBirth': values['date-picker'].format('YYYY-MM-DD')
      }

      if (!err) {
        //send data after format
        console.log(format);
        AlertSuccess('Register Successfully');
        props.history.push('/auth/login');
      } else {
        AlertError('Register failed');
      }
    });
  }

  function validatorConfirmPassword(rule, value, callback) {
    validator.validatorConfirmPassword(rule, value, callback, form, 'password');
  }

  return (
    <div className="container-form">
      <div className="container-form-2">
        <h1 className="title-register">REGISTER TO WEBSITE</h1>
        <Form {...formItemLayout} className="auth-form" onSubmit={onSubmit}>

          <Form.Item label="User Name">
            {getFieldDecorator('userName', {
              rules: [{
                required: true, message: 'Please input your username!'
              }, {
                validator: validator.validatorUserName,
              }],
            })(
              <Input />
            )}
          </Form.Item>

          <Form.Item label="Password">
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: validator.validatorPassWord,
              }],
            })(
              <Input.Password/>
            )}
          </Form.Item>

          <Form.Item label="Confirm Password">
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: validatorConfirmPassword,
              }],
            })(
              <Input.Password/>
            )}
          </Form.Item>

          <Form.Item label="Date Of Birth">
            {getFieldDecorator('date-picker', {
              rules: [{
                type: 'object', required: true, message: 'Please select time!'
              }, {
                validator: validator.validatorDate,
              }],
            })(
              <DatePicker className="date-of-birth" />
            )}
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className='auth-form-button'>Register</Button>
          </Form.Item>

        </Form>

      </div>
    </div>
  );
}

const WrappedRegister = Form.create()(Register);
export default withRouter(WrappedRegister)

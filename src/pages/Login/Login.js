import React, { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import { actFetchLoginMovie } from './duck/actions';

export default function Login() {
  const dispatch = useDispatch()
  const error = useSelector((state) => state.loginReducer.error);
  const navigate = useNavigate();

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  })

  const handlOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handlLogin = (e) => {
    e.preventDefault();

    dispatch(actFetchLoginMovie(state, navigate));
  }

  const renderError = () => {
    return (
      error && (<div className='alert alert-danger'>{error?.response.data.content}</div>)
    )
  }

  if (localStorage.getItem("UserAdmin")) {
    return <Navigate to="/admin/home" replace />
  }

  return (
    <div className='container mt-5 col-3'>
      {renderError()}
      <Form onSubmitCapture={handlLogin}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Không bỏ trống tài khoản',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tên đăng nhập" onChange={handlOnChange} name='taiKhoan' />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Không bỏ trông mật khẩu',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Mật khẩu"
            onChange={handlOnChange}
            name='matKhau'
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="" style={{ color: "red" }}>
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="" style={{ color: "red" }}>register now!</a>
        </Form.Item>
      </Form>
    </div>

  )
}

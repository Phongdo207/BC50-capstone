import React from 'react'
import { useState } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
} from 'antd';

import { actFetchRegister } from './duck/actions';
import { useDispatch } from 'react-redux';

const { Option } = Select;;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default function Register() {
  const [form] = Form.useForm();
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="83">+83</Option>
        <Option value="84">+84</Option>
        <Option value="85">+85</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const dispatch = useDispatch();
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    hoTen: "",
  })

  const handlOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  const handlAddUser = (e) => {
    e.preventDefault();
    dispatch(actFetchRegister(state));
  }


  return (
    <div className='container mt-5 col-5'>
      <Form onSubmitCapture={handlAddUser}
        {...formItemLayout}
        form={form}
        name="register"
        initialValues={{
          residence: [],
          prefix: '',
        }}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >

        <Form.Item
          name="nickname"
          label="Tên đăng nhập"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập họ và tên',
              whitespace: true,
            },
          ]}
          onChange={handlOnChange}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
          onChange={handlOnChange}

        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Nhập mật khẩu"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu',
            },
          ]}
          hasFeedback
          onChange={handlOnChange}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Nhập lại mật khẩu"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập lại mật khẩu',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered do not match!'));
              },
            }),
          ]}
          onChange={handlOnChange}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Số điện thoại"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập số điện thoại',
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
            onChange={handlOnChange}
          />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

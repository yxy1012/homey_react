import React, { useState } from "react";
import { Card, Form, Input, Button } from "antd";
import "./index.css";

export default function MyAccount() {
  const [status, setStatus] = useState(1);
  const [loginForm] = Form.useForm();
  const [registerForm] = Form.useForm();
  return (
    <div>
      <img
        className="my-account"
        src={`${global.constants.s3Image}myAccount.2c8d83a5.png`}
        alt="logo"
      />
      <Card className="my-account-card">
        {status ? (
          <>
            <h2>Login</h2>
            <p className="my-account-hint">
              Please login using account detail below.
            </p>
            <Form name="basic" className="my-account-form" autoComplete="off" form={loginForm}>
              <Form.Item
                name="email"
                className="my-account-input"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your Email address!",
                  }
                ]}
              >
                <Input placeholder="Email address" />
              </Form.Item>
              <Form.Item
                name="password"
                className="my-account-input"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
              <Form.Item className="my-account-button">
                <Button type="primary"> Sign in </Button>
              </Form.Item>
              <Form.Item>
                <span className="my-account-switch">
                  Don't have an account?
                </span>
                <Button
                  type="link"
                  style={{ color: "darkgray" }}
                  onClick={() => {
                    setStatus(0);
                    console.log(loginForm);
                  }}
                >
                  Create account
                </Button>
              </Form.Item>
            </Form>
          </>
        ) : (
          <>
            <h2>Register</h2>
            <p className="my-account-hint">
              Please register by creating account below.
            </p>
            <Form name="basic" className="my-account-form" autoComplete="off" form={registerForm}>
              <Form.Item
                name="email"
                className="my-account-input"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email address!",
                  },
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  }
                ]}
              >
                <Input placeholder="Email address" />
              </Form.Item>
              <Form.Item
                name="password"
                className="my-account-input"
                type="string"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  {
                    min: 8,
                    message: "The length of the password should be at least 8!",
                  }
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
              <Form.Item
                name="repassword"
                className="my-account-input"
                dependencies={['password']}
                rules={[
                  {
                    required: true,
                    message: "Please input your password again!",
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
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>
              <Form.Item className="my-account-button">
                <Button type="primary"> Sign up </Button>
              </Form.Item>
              <Form.Item>
                <span className="my-account-switch">
                  Already have an account?
                </span>
                <Button
                  type="link"
                  style={{ color: "darkgray" }}
                  onClick={() => {
                    setStatus(1);
                    console.log(registerForm);
                  }}
                >
                  Go to sign in
                </Button>
              </Form.Item>
            </Form>
          </>
        )}
      </Card>
    </div>
  );
}

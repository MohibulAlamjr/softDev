import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;

class Appform extends Component {
    render() {
        return (
            <>
                <div  className="block contactBlock">
                    <div className="container-fluid">
                        <div className="titleHolder">
                        <h2>Get in Touch</h2>
                        <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
                        </div>

                        <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
     
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input  placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>

                    </div>
                </div>
            </>
        );
    }
}

export default Appform;
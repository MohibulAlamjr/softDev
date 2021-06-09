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

                        <Form name="normal_login"className="login-form"initialValues={{ remember: true }}>
     
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
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
        
        </Form.Item>
        <Form.Item
            name="telephone"
          >
            <Input placeholder="Telephone" />
          </Form.Item>
          <Form.Item
            name="subject"
          >
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="message"
          >
            <TextArea placeholder="Message" />
          </Form.Item>

                  
          <Checkbox>I agree with terms and conditions.</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        
      </Form.Item>
    </Form>
                    </div>
                </div>
            </>
        );
         
    }
}

export default Appform;
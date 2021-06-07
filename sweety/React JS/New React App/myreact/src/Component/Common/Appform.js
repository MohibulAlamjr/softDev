import React, { Component } from 'react';
import { Form, Input, Button, Checkbox,Col} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class Appform extends Component {
    render() {
        return (
            <>
               <div className='block contactBlock'>
                   <div className='container-fluid'>
                       <div className='titleHolder'>
                           <h4>Get in Touch</h4>
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
        <Input placeholder="Fullname" />
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
        </Form.Item>

        <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          type="password"
          placeholder="Telephone"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          type="password"
          placeholder="Subject"
        />
     </Form.Item>
          <Form.Item name={['user', 'introduction']} >
              <Input.TextArea placeholder='Message' />
     </Form.Item>
      </Form.Item>
      <Form.Item>
      <Checkbox className='box'>
              I have read the agreement.
              </Checkbox>
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
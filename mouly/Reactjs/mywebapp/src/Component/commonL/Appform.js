import React, { Component } from 'react';
import { Form, Input, Button, Checkbox,onFinish } from 'antd';

class Appform extends Component {

  

    render() {
          

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
        return (
            <div>
                <div  id= "form" className = "block contactBlock">

                    <div className = "container-fluid">
                        <div className = "titleHolder">
                            <h3>Get in Touch</h3>
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
        <Input placeholder="Full Name" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Username!' }]} >
        <Input placeholder="Email address" />
      </Form.Item>

      <Form.Item
        name="phone"
        rules={[{ required: true, message: 'Please input your phone number!' }]}>
        <Input placeholder="Telephone"  />
      </Form.Item>

      <Form.Item
        name="sub"
        rules={[{ required: true, message: 'Please input your subject!' }]} >
        <Input placeholder="Subject" />
      </Form.Item>

      
      
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
        </Form.Item>

        <Form.Item name={['user', 'introduction']} >
          <Input.TextArea placeholder='Message' />
       </Form.Item>

       <Form.Item
           name="agreement"
           valuePropName="checked"
             rules={[
                   {
                   validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                         },
                       ]}
                   {...tailFormItemLayout}
                       >
                     <Checkbox>
                     I have read the <a href="">agreement</a>
                   </Checkbox>
                </Form.Item>
      </Form.Item>
         
      

      <Form.Item>

        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
       
      </Form.Item>
    </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Appform;
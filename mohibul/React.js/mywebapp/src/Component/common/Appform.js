import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


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
            <>
                <div className='block contactBlock'>
                    <div className='container-fluid'>
                        <div className='titleHolder'>
                        <h2>Choose a plan to fit your needs</h2>
                        <p>Debitis itaque minima dolorum fuga aperiam inventore, quidem enim</p>
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


                                <Form.Item
                                    name="Telephone"
                                    rules={[{ required: true, message: 'Please input your Telephone number!' }]}
                                >
                                    <Input  placeholder="Telephone" />
                                </Form.Item>
                                <Form.Item
                                    name="Subject"
                                    rules={[{ required: true, message: 'Please input your Topic!' }]}
                                >
                                    <Input  placeholder="Subject" />
                                </Form.Item>
                                

                                
                                <Form.Item name={['user', 'introduction']} >
                                    <Input.TextArea placeholder='Message' />
                                </Form.Item>
                                <Form.Item className='ant-checkbox'
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
                                    
                                    I agree with terms and conditions.
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
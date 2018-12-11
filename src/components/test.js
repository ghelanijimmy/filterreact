import React from 'react';
import {Form, Input, Row, Col, Layout} from 'antd';

const {Footer} = Layout;
const FormItem = Form.Item;

const Test = (props) => {
    
    return(
        <div>
            <Row>
                <Col span ={6}/>
                <Col span ={12}>
                    <Form className="login-form">
                        <FormItem>
                            <Input placeholder="Search" onChange={props.changetext}/>
                        </FormItem>
                    </Form>
                    <section>
                        <h2>{props.inputText}</h2>
                    </section>
                </Col>
                <Col span ={6}/>
            </Row>
            <Row>
                <Col span={6} className="blocks">
                    <h1>Test Block 1</h1>
                </Col>
                <Col span={6} className="blocks">
                    <h1>Test Block 2</h1>
                </Col>
                <Col span={6} className="blocks">
                    <h1>Test Block 3</h1>
                </Col>
                <Col span={6} className="blocks">
                    <h1>Test Block 4</h1>
                </Col>
            </Row>
            <Footer>Footer</Footer>
        </div>
    )
}

export default Test;
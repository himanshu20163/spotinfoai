import React, { useState } from "react";
import { Form, Input, Button, Select, Switch, Row, Col } from "antd";
import { PlusOutlined, CheckOutlined } from "@ant-design/icons";

const Pagefifteen = () => {
  const { Option } = Select;
  const [loadings, setLoadings] = useState([]);
  const [size, setSize] = useState("large");
  const [position, setPosition] = useState('end');

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000); // Simulate loading time
  };

  return (
    <Form layout="vertical">
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="apiLink">
            <Select
              defaultValue="Collection 1"
              style={{
                width: 120,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "Collection 1",
                  label: "Collection 1",
                },
                {
                  value: "Collection 2",
                  label: "Collection 2",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                  disabled: true,
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="name">
            <label>X-Ray Mode</label>
            <Switch size="small" defaultChecked />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <Form.Item label="Description" name="description">
            <Input placeholder="Enter Description" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="Resource identifies"
        name="apiParams"
        style={{
          
          textAlign: "center",
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Input placeholder="API sample " />
          </Col>
          <Col span={2}>
            
            <Button icon={<CheckOutlined />} type="text" iconPosition={position}>
            Next
          </Button>
          </Col>
        </Row>
        
      </Form.Item>

      <Form.Item
        label="Parameter Extracted"
        name="apiParams"
        style={{
          
          textAlign: "center",
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Input placeholder="Parameter 1 : value(s); Parameter 2 : values(S)" />
          </Col>
          <Col span={2}>
            
            <Button icon={<CheckOutlined />} type="text" iconPosition={position}>
            Next
          </Button>
          </Col>
        </Row>
        
      </Form.Item>

      <Form.Item
        label="API response"
        name="apiParams"
        style={{
          
          textAlign: "center",
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Input placeholder="API response in json format " />
          </Col>
          
          <Col span={2}>
            
            <Button icon={<CheckOutlined />} type="text" iconPosition={position}>
            Next
          </Button>
          </Col>
        </Row>
        
      </Form.Item>

      <Form.Item name="description">
        <Row gutter={24}>
          <Col span={20}>
            <Input placeholder="" />
          </Col>
          
        </Row>
      </Form.Item>

      {/* <Row justify="end" gutter={16}>
        <Col>
          <Button
            type="primary"
            onClick={() => enterLoading(0)}
            loading={loadings[0]}
          >
            Edit
          </Button>
        </Col>
        <Col>
          <Button
            type="default"
            onClick={() => enterLoading(1)}
            loading={loadings[1]}
          >
            Test
          </Button>
        </Col>
        <Col>
          <Button
            type="primary"
            onClick={() => enterLoading(2)}
            loading={loadings[2]}
          >
            Save
          </Button>
        </Col>
      </Row> */}
    </Form>
  );
};

export default Pagefifteen;

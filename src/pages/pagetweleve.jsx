import React, { useState } from "react";
import { Form, Input, Button, Select, Switch, Row, Col } from "antd";
import { PlusOutlined, CheckOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";

const ApiForm = () => {
  const { Option } = Select;
  const [loadings, setLoadings] = useState([]);
  const [size, setSize] = useState("small");

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
          <Form.Item label="API Link" name="apiLink">
            <Input placeholder="Enter API link" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Name" name="name">
            <Input placeholder="Enter Name" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="API Creds" name="apiCreds">
            <Select placeholder="Choose Creds">
              <Option value="cred1">A</Option>
              <Option value="cred2">B</Option>
            </Select>
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
        label="API Params"
        name="apiParams"
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <Row gutter={16}>
          <Col span={6}>
            <Input placeholder="Parameter1 name" />
          </Col>
          <Col span={4}>
            <Input placeholder="Data type" />
          </Col>
          <Col span={4}>
            <Switch checkedChildren="Static" unCheckedChildren="Dynamic" />
          </Col>
          <Col span={6}>
            <Input placeholder="Sample value" />
          </Col>
          <Col span={2}>
            <Button
              type="primary"
              shape="round"
              icon={<CheckOutlined />}
              size={size}
            />
          </Col>
        </Row>
      </Form.Item>

      <Form.Item label="Sample Questions" name="sampleQuestions">
        <Row gutter={24}>
          <Col span={20}>
            <Input placeholder="Enter Sample Questions" />
          </Col>
          <Col span={2}>
            <Button
              type="primary"
              shape="round"
              icon={<CheckOutlined />}
              size={size}
            />
          </Col>
        </Row>
      </Form.Item>

      <Row justify="end" gutter={16}>
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
      </Row>

    </Form>
  );
};

export default ApiForm;

import React, { useState } from "react";
import { Form, Input, Button, Select, Switch, Row, Col } from "antd";
import { PlusOutlined, CheckOutlined } from "@ant-design/icons";

const Pagesixteen = () => {
  const { Option } = Select;
  const [loadings, setLoadings] = useState([]);
  const [size, setSize] = useState("large");
  const [position, setPosition] = useState("end");

  const handleChange = (value) => {
    console.log(`selected ${value}`);
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
      </Row>

      <Row style={{ display: "flex", alignItems: "center" }} gutter={6}>
        <label>Web Widget</label>
        <Col span={6}>
          <Button>Python</Button>
          <Button>Java</Button>
          <Button>Node</Button>
        </Col>
        <Col span={2}></Col>
        <Col span={2}></Col>
      </Row>

      <Form.Item
        name="apiParams"
        style={{
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Input placeholder="API sample " />
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default Pagesixteen;

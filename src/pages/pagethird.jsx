import React, { useState } from "react";
import { Form, Input, Button, Select, Switch, Row, Col , DatePicker } from "antd";
import { PlusOutlined, CheckOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";

const Pagethird = () => {
  const { Option } = Select;
  const [loadings, setLoadings] = useState([]);
  const [size, setSize] = useState('small');

  const onChange = (date, dateString) => {
    console.log(date, dateString);
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
    <Form layout="vertical" class="third-page-container">
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Doc Link/Path" name="Path">
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
          <Form.Item label="Last Sync" name="last sync">
          <Input placeholder="Last Sync" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Next Sync" name="Next sync" class="third-page-next-sync">
          <Input placeholder="Next Sync" />
          <Switch size="small" class="third-page-switch" defaultChecked />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          
        </Col>

        <Col span={12}>
        <Form.Item label="Added On" name="Added On">
        <DatePicker onChange={onChange} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Button type="primary">Edit</Button>
        </Col>
        <Col span={12}>
          <Button type="primary">Save changes</Button>
        </Col>
      </Row>

    </Form>
  );
};

export default Pagethird;

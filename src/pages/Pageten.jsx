import React, { useState } from "react";
import { Table, Button, Modal, Upload, Input, Space } from "antd";

import {
  InfoCircleOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";


const Pageten = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploadVisible, setIsUploadVisible] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      id: 1,
      name: "Onboarding",
      type: "Document",
      createdBy: "John",
      createdOn: "1st Jun",
    },
    {
      key: "2",
      id: 2,
      name: "Return Policies",
      type: "Document",
      createdBy: "John",
      createdOn: "1st Jun",
    },
    {
      key: "3",
      id: 3,
      name: "Order API",
      type: "API",
      createdBy: "John",
      createdOn: "1st Jun",
    },
    {
      key: "4",
      id: 4,
      name: "Refund API",
      type: "API",
      createdBy: "John",
      createdOn: "1st Jun",
    },
  ]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Created By",
      dataIndex: "createdBy",
      key: "createdBy",
    },
    {
      title: "Created On",
      dataIndex: "createdOn",
      key: "createdOn",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <InfoCircleOutlined onClick={() => handleInfo(record)} />
          <DeleteOutlined onClick={() => handleDelete(record.key)} />
        </Space>
      ),
    },
  ];

  const handleInfo = (record) => {
    console.log("Info for:", record);
    // You can open a modal here with more information
  };

  const handleDelete = (key) => {
    const newDataSource = dataSource.filter((item) => item.key !== key);
    setDataSource(newDataSource);
  };

  const handleAddDocument = () => {
    setIsUploadVisible(true);
  };

  const handleUploadCancel = () => {
    setIsUploadVisible(false);
  };

  return (
    <>
      <div>
        <Table dataSource={dataSource} columns={columns} />

        <Space style={{ marginTop: 16 }}>
          <Button type="primary" onClick={handleAddDocument}>
            Add Document
          </Button>
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            Add API
          </Button>
        </Space>

        <Modal
          title="Upload Document"
          visible={isUploadVisible}
          onCancel={handleUploadCancel}
          footer={null}
        >
          <Upload.Dragger>
            <p className="ant-upload-drag-icon">
              <PlusOutlined />
            </p>
            <p className="ant-upload-text">
              Drag and drop document here to upload
            </p>
            <p className="ant-upload-hint">
              Select from device or other options below.
            </p>
          </Upload.Dragger>
          <Input placeholder="Name" style={{ marginTop: 16 }} />
          <Button type="primary" style={{ marginTop: 16 }} block>
            Add
          </Button>
        </Modal>
      </div>
    </>
  );
};

export default Pageten;
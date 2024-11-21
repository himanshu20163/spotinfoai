import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Select,
  Form,
  Input,
  Space,
  message,
  Row,
  Col,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";

const Pagefive = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form] = Form.useForm();
  const [users, setUsers] = useState([
    {
      Type: "Api key",
      description: "this is for product api",
      created_by: "himanshu",
      created_on: "1 jun",
    },
  ]);

  // Handle add/edit user

  const handleAddEditUser = (values) => {
    if (editingUser) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editingUser.id ? { ...user, ...values } : user
        )
      );
      message.success("User updated successfully!");
    } else {
      const newUser = { ...values, id: users.length + 1 };
      setUsers([...users, newUser]);
      message.success("User added successfully!");
    }
    setIsModalOpen(false);
    form.resetFields();
    setEditingUser(null);
  };

  // Open modal for editing a user
  const handleEdit = (user) => {
    setIsModalOpen(true);
    setEditingUser(user);
    form.setFieldsValue(user);
  };

  // Delete a user
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
    message.success("User deleted successfully!");
  };

  // Columns for the table
  const columns = [
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "created By", dataIndex: "created_by", key: "created_by" },
    { title: "Created On", dataIndex: "created_on", key: "created_on" },
    {
      title: "Actions",
      key: "actions",
      render: (_, user) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(user)}>
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(user.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setIsModalOpen(true)}
      >
        Add User
      </Button>

      <Table
        dataSource={users}
        columns={columns}
        rowKey="id"
        style={{ marginTop: "20px" }}
      />

      <Modal
        title={editingUser ? "Edit User" : "Add User"}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          form.resetFields();
          setEditingUser(null);
        }}
        onOk={() => form.submit()}
      >
        <Form form={form} layout="vertical" onFinish={handleAddEditUser}>
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
            }}
            // onChange={handleChange}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
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
          <Form.Item
            name="Key Value"
            label="key value"
            rules={[
              { required: true, message: "" },
              { type: "description", message: "Please enter a valid description" },
            ]}
            created_by
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="created_by"
            label="created_by"
            rules={[
              { required: true, message: "" },
              {
                type: "created_by",
                message: "Please enter a valid created_by",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="created_on"
            label="created_on"
            rules={[
              { required: true, message: "" },
              {
                type: "created_on",
                message: "Please enter a valid created_on",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Form.Item
        name="Client ID"
        style={{
          marginTop: "20px",
          textAlign: "center",
        }}
      >
       
      </Form.Item>

      <Form.Item
        name="Client Secret"
        style={{
          marginTop: "20px",
          textAlign: "center",
        }}
      >
       
      </Form.Item>
    </div>
  );
};

export default Pagefive;

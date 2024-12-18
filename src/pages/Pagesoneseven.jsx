import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Space, message , Row, Col } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined , PaperClipOutlined } from '@ant-design/icons';

const Pageseven = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form] = Form.useForm();
  const [users, setUsers] = useState([
    { id: 1, clientID : 'Sample collection', clientsecret: 'this is for product 1',
        created_by: 'himanshu', created_on:'1 jun' },
  ]);

  // Handle add/edit user
  const handleAddEditUser = (values) => {
    if (editingUser) {
      setUsers((prev) =>
        prev.map((user) => (user.id === editingUser.id ? { ...user, ...values } : user))
      );
      message.success('User updated successfully!');
    } else {
      const newUser = { ...values, id: users.length + 1 };
      setUsers([...users, newUser]);
      message.success('User added successfully!');
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
    message.success('User deleted successfully!');
  };

  // Columns for the table
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Client ID', dataIndex: 'ClientID', key: 'Client ID' },
    { title: 'Client Secret', dataIndex: 'ClientSecret', key: 'ClientSecret' },
    { title: 'Created By', dataIndex: 'created_by', key: 'created_by' },
    { title: 'Created On', dataIndex: 'created_on', key: 'created_on' },
    {
      title: 'Actions',
      key: 'actions',
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
      )
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
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
        style={{ marginTop: '20px' }}
      />

      <Modal
        title={editingUser ? 'Edit User' : 'Add User'}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          form.resetFields();
          setEditingUser(null);
        }}
        onOk={() => form.submit()}
      >
        <Form form={form} layout="vertical" onFinish={handleAddEditUser}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter the name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="description"
            rules={[
              { required: true, message: '' },
              { type: 'description', message: 'Please enter a valid description' }
            ]}created_by
          >
            <Input />
            </Form.Item>
            <Form.Item
            name="created_by"
            label="created_by"
            rules={[
              { required: true, message: '' },
              { type: 'created_by', message: 'Please enter a valid created_by' }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="created_on"
            label="created_on"
            rules={[
              { required: true, message: '' },
              { type: 'created_on', message: 'Please enter a valid created_on' }
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
        <Row gutter={16}>
          <Col span={12} style={{ display: "flex", alignItems: "center" }}>
            <Input placeholder="API sample " />
             <div style={{paddingLeft:"20px"}}>
             <PaperClipOutlined />
             </div>
           
          
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="Client Secret"
        style={{
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        <Row gutter={16}>
          <Col span={12} style={{ display: "flex", alignItems: "center" }}>

            <Input placeholder="API sample " />
            <div style={{paddingLeft:"20px"}}>
            <PaperClipOutlined />
            </div>
          </Col>
        </Row>
      </Form.Item>
    </div>
  );
};

export default Pageseven;

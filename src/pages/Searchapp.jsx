import React from 'react';
import { Layout, Input, Avatar, Card, Row, Col, Tabs } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Meta } = Card;
const { TabPane } = Tabs;

const SearchApp = () => {
  return (
    <div>
      <Header style={{ backgroundColor: '#1890ff', padding: '20px' }}>
        <Tabs defaultActiveKey="1" centered >
          <TabPane tab="Search App" key="1" style={{ backgroundColor: '#fff', padding: '20px' }}>
            <Input
              placeholder="Search"
              suffix={<SearchOutlined style={{ color: '#fff' }} />}
              style={{ width: 300, marginBottom: '20px' }}
            />

            <Content style={{ padding: '20px' }}>
              <Row gutter={16} justify="center">
                {['App 1', 'App 2', 'App 3', 'App 4'].map((app, index) => (
                  <Col key={index} xs={24} sm={12} md={6}>
                    <Card
                      title={app}
                      hoverable
                      style={{ marginBottom: '20px' }}
                      cover={<img alt="example" src="https://via.placeholder.com/150" />}
                    >
                      <Meta title="More Info" />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Content>
          </TabPane>

          <TabPane tab="Install App" key="2" style={{ backgroundColor: '#fff', padding: '20px' }}>
            <Content style={{ padding: '20px' }}>
              <h2>Install App Content</h2>
              <p>This section can contain information or instructions on how to install the app.</p>
            </Content>
          </TabPane>
        </Tabs>
      </Header>
    </div>
  );
};

export default SearchApp;

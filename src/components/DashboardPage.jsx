import React from 'react';
import { Layout, Typography } from 'antd';
import '../App.css';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const DashboardPage = ({ children }) => {
  return (
    <Layout className="dashboard-layout">
      <header className="dashboard-header">
        <div className="dashboard-banner" />
        <div className="dashboard-header-content">
          <Title level={2} className="dashboard-title">Portfolio Company Metrics</Title>
          <Paragraph className="dashboard-subtitle">
            Internal Tool — Track, visualize, and monitor company metrics
          </Paragraph>
        </div>
      </header>

      <Content className="dashboard-content">
        <div className="dashboard-content-inner">
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default DashboardPage;

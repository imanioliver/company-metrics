const DashboardPage = ({ children }) => {
    return (
      <div className="page-wrapper">  
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
      </div>
    );
  };
  
  export default DashboardPage; 

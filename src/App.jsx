import React, { useState } from 'react';
import MetricsForm from './components/MetricsForm';
import MetricsTable from './components/MetricsTable';
import MetricsChart from './components/MetricsChart';
import EmailExtractModal from './components/EmailExtractModal';
import DashboardPage from './pages/DashboardPage';

import { Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';

import { sampleMetrics } from './data/sampleMetrics'; 

const App = () => {
  const [metrics, setMetrics] = useState(sampleMetrics); 
  const [modalVisible, setModalVisible] = useState(false);

  const handleAdd = (metric) => {
    setMetrics((prev) => [...prev, metric]);
  };

  const handleAIExtract = (extracted) => {
    console.log('🧠 Extracted from AI or mock:', extracted);
    handleAdd(extracted);
  };

  return (
    <DashboardPage>
      <div style={{ padding: 24 }}>
        <Button
          icon={<MailOutlined />}
          onClick={() => setModalVisible(true)}
          style={{ marginBottom: 16 }}
        >
          Paste Email → AI Extract
        </Button>

        <EmailExtractModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onExtract={handleAIExtract}
        />

        <MetricsForm onAdd={handleAdd} />
        <MetricsChart metrics={metrics} />
        <MetricsTable metrics={metrics} />
      </div>
    </DashboardPage>
  );
};

export default App;

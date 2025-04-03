import React, { useState } from 'react';
import DashboardPage from './components/DashboardPage';
import MetricsForm from './components/MetricsForm';
import MetricsTable from './components/MetricsTable';
import MetricsChart from './components/MetricsChart';
import { sampleMetrics } from './data/sampleMetrics';
import './App.css';

const App = () => {
  const [metrics, setMetrics] = useState(sampleMetrics);

  const addMetric = (metric) => {
    setMetrics(prev => [...prev, metric].sort((a, b) => new Date(b.date) - new Date(a.date)));
  };

  return (
    <DashboardPage>
      <section style={{ marginBottom: 32 }}>
        <MetricsForm onAdd={addMetric} />
        <MetricsChart metrics={metrics} />
        <MetricsTable metrics={metrics} />
      </section>
    </DashboardPage>
  );
};

export default App;

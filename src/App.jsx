import React, { useState } from 'react';
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
    <div style={{ padding: 24, maxWidth: 1000, margin: '0 auto' }}>
      <h1>Company Metrics Dashboard</h1>
      <MetricsForm onAdd={addMetric} />
      <MetricsTable metrics={metrics} />
      <MetricsChart metrics={metrics} />
    </div>
  );
};

export default App;

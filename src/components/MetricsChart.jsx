import React, { useState } from 'react';
import { Line } from '@ant-design/plots';
import { Card, Space, Button } from 'antd';

const MetricsChart = ({ metrics }) => {
  // Controls which metrics are currently visible on the chart
  const [visibleMetrics, setVisibleMetrics] = useState(['cash', 'burn', 'mrr']);

  // Toggling logic for the metric buttons
  const toggleMetric = (metric) => {
    setVisibleMetrics(prev => 
      prev.includes(metric) ? prev.filter(m => m !== metric) : [...prev, metric]
    );
  };

  // Build chart data based on selected metrics and available data
  const chartData = metrics.flatMap((metric) => {
    const dataPoints = [];

    // Only plot if the metric is selected and the value is valid
    if (visibleMetrics.includes('cash') && typeof metric.cash === 'number') {
        dataPoints.push({ date: metric.date, value: metric.cash, type: 'Cash' });
    }
    if (visibleMetrics.includes('burn') && typeof metric.burn === 'number') {
        dataPoints.push({ date: metric.date, value: metric.burn, type: 'Burn' });
    }
    if (visibleMetrics.includes('mrr') && typeof metric.mrr === 'number') {
        dataPoints.push({ date: metric.date, value: metric.mrr, type: 'MRR' });
    }

    return dataPoints;
});

// I color grabbed the purple on the Seven Seven Six brand site, and I thought it was SO cool that the hex code starts with 776 :)
const colors = {
    cash: '#776CCE',
    burn: '#FFCE66',   // Wanted a softer yellow to balance the purple
    mrr: '#00BFBF'     // Chose a teal for contrast and readability
};

const config = {
    data: chartData,
    xField: 'date',
    yField: 'value',
    seriesField: 'type',
    smooth: true,
    legend: { position: 'top' },
    tooltip: false, // I ran into tooltip issues and decided to intentionally leave it out for this version
    colorField: 'type',
    color: ['#776CCE', '#FFCE66', '#00BFBF'], //my initial desire was to 
    height: 300,
};


  return (
    <Card title="Metrics Over Time">
      {/* Toggle buttons for each metric */}
      <Space style={{ marginBottom: 12 }}>
        {['cash', 'burn', 'mrr'].map((metric) => (
          <Button 
          key={metric}
          style={{
            backgroundColor: colors[metric],
            color: '#fff',
            border: 'none'
          }}
          onClick={() => toggleMetric(metric)}
      >
          {metric.toUpperCase()}
            </Button>
        ))}
      </Space>
      <Line {...config} />
    </Card>
  );
};

export default MetricsChart;

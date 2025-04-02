import React from 'react';
import { Line } from '@ant-design/plots';

const MetricsChart = ({ metrics }) => {
  const config = {
    data: metrics.map((metric) => ({
      date: metric.date,
      cash: metric.cash,
      burn: metric.burn,
      mrr: metric.mrr,
    })),
    xField: 'date',
    yField: 'value',
    seriesField: 'type',
    legend: { position: 'top' },
    smooth: true,
    tooltip: {
      showMarkers: true,
    },
    geometryOptions: [
      { geometry: 'line', color: '#8884d8' },
      { geometry: 'line', color: '#82ca9d' },
      { geometry: 'line', color: '#ffc658' },
    ],
  };

  const chartData = [];
  metrics.forEach((m) => {
    chartData.push({ date: m.date, value: m.cash, type: 'Cash' });
    chartData.push({ date: m.date, value: m.burn, type: 'Burn' });
    chartData.push({ date: m.date, value: m.mrr, type: 'MRR' });
  });

  return <Line {...config} data={chartData} />;
};

export default MetricsChart;

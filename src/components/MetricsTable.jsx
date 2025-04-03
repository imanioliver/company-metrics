import React from 'react';
import { Table, Card, Tag } from 'antd';
import { tableColumns } from '../data/tableColumns';


const statusColors = {
  Complete: 'green',
  Estimated: 'gold',
  Incomplete: 'orange',
  'Needs Follow-Up': 'red',
  Flagged: 'purple',
};

const MetricsTable = ({ metrics }) => {
  const columns = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Cash on Hand', dataIndex: 'cash', key: 'cash', render: (value) => `$${value.toLocaleString()}` },
    { title: 'Monthly Burn', dataIndex: 'burn', key: 'burn', render: (value) => `$${value.toLocaleString()}` },
    { title: 'MRR', dataIndex: 'mrr', key: 'mrr', render: (value) => `$${value.toLocaleString()}` },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (value) => <Tag color={statusColors[value] || 'default'}>{value}</Tag> },
    { title: 'Notes', dataIndex: 'notes', key: 'notes', render: (value) => value || '-' },
    { title: 'Draft', dataIndex: 'draft', key: 'draft', render: (value) => value ? <Tag color="orange">Draft</Tag> : <Tag color="green">Final</Tag> },
  ];

  return (
    <Card title="Metrics Table" style={{ marginBottom: 24 }}>
    <Table 
        dataSource={metrics.map((metric, index) => ({ ...metric, key: index }))} 
        columns={tableColumns} 
        pagination={{ pageSize: 6 }} 
    />
    </Card>
  );
};

export default MetricsTable;

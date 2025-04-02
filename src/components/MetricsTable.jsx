import React from 'react';
import { Table } from 'antd';

const MetricsTable = ({ metrics }) => {
  const columns = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Cash on Hand', dataIndex: 'cash', key: 'cash', render: (val) => `$${val.toLocaleString()}` },
    { title: 'Monthly Burn', dataIndex: 'burn', key: 'burn', render: (val) => `$${val.toLocaleString()}` },
    { title: 'MRR', dataIndex: 'mrr', key: 'mrr', render: (val) => `$${val.toLocaleString()}` },
  ];

  return (
    <Table 
      dataSource={metrics.map((metric, id) => ({ ...metric, key: id }))}
      columns={columns}
      pagination={false}
    />
  );
};

export default MetricsTable;

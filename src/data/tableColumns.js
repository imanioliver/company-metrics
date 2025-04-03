// src/data/tableColumns.js

export const tableColumns = [
    {
      title: 'Date',
      dataIndex: 'date',
      sorter: (a, b) => new Date(a.date) - new Date(b.date), // Sorting makes it easier to order by timeline
    },
    {
      title: 'Cash',
      dataIndex: 'cash',
    },
    {
      title: 'Burn',
      dataIndex: 'burn',
    },
    {
      title: 'MRR',
      dataIndex: 'mrr',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      filters: [
        { text: 'Complete', value: 'Complete' },
        { text: 'Estimated', value: 'Estimated' },
        { text: 'Needs Follow-Up', value: 'Needs Follow-Up' },
        { text: 'Incomplete', value: 'Incomplete' },
        { text: 'Flagged', value: 'Flagged' },
      ],
      onFilter: (value, record) => record.status === value, // Quick filter so users could spot patterns
    },
    {
      title: 'Draft',
      dataIndex: 'draft',
      render: (draft) => (draft ? 'Yes' : 'No'),
    },
    {
      title: 'Notes',
      dataIndex: 'notes',
    },
  ];
  
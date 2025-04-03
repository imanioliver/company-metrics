import React from 'react';
import { Form, InputNumber, DatePicker, Input, Checkbox, Select, Button, Card } from 'antd';
import dayjs from 'dayjs';

const { Option } = Select;

const MetricsForm = ({ onAdd }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const newMetric = {
      date: values.date.format('YYYY-MM-DD'),
      cash: values.cash,
      burn: values.burn,
      mrr: values.mrr,
      notes: values.notes || '',
      draft: values.draft || false,
      status: values.status || 'Complete',
    };
    onAdd(newMetric);
    form.resetFields();
  };

  return (
    <Card title="Add New Metric" style={{ marginBottom: 24 }}>
      <Form form={form} layout="inline" onFinish={onFinish} style={{ flexWrap: 'wrap' }}>
        <Form.Item name="date" rules={[{ required: true, message: 'Date required' }]}>
          <DatePicker placeholder="Date" defaultValue={dayjs()} />
        </Form.Item>
        <Form.Item name="cash" rules={[{ required: true, message: 'Cash required' }]}>
          <InputNumber placeholder="Cash on Hand" prefix="$" />
        </Form.Item>
        <Form.Item name="burn" rules={[{ required: true, message: 'Burn required' }]}>
          <InputNumber placeholder="Monthly Burn" prefix="$" />
        </Form.Item>
        <Form.Item name="mrr" rules={[{ required: true, message: 'MRR required' }]}>
          <InputNumber placeholder="MRR" prefix="$" />
        </Form.Item>
        <Form.Item name="status" initialValue="Complete">
          <Select style={{ width: 160 }}>
            <Option value="Complete">✅ Complete</Option>
            <Option value="Estimated">⚠️ Estimated</Option>
            <Option value="Incomplete">⏳ Incomplete</Option>
            <Option value="Needs Follow-Up">📌 Needs Follow-Up</Option>
            <Option value="Flagged">🟣 Flagged</Option>
          </Select>
        </Form.Item>
        <Form.Item name="notes">
          <Input placeholder="Notes (optional)" style={{ width: 200 }} />
        </Form.Item>
        <Form.Item name="draft" valuePropName="checked">
          <Checkbox>Draft?</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Add Metric</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default MetricsForm;

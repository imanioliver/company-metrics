import React from 'react';
import { Form, InputNumber, DatePicker, Button, Card } from 'antd';
import dayjs from 'dayjs';

const MetricsForm = ({ onAdd }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const newMetric = {
      date: values.date.format('YYYY-MM-DD'),
      cash: values.cash,
      burn: values.burn,
      mrr: values.mrr,
    };
    onAdd(newMetric);
    form.resetFields();
  };

  return (
    <Card style={{ marginBottom: 24 }}>
      <Form form={form} layout="inline" onFinish={onFinish}>
        <Form.Item name="date" rules={[{ required: true, message: 'Date required' }]}>
          <DatePicker placeholder="Date" defaultValue={dayjs()} />
        </Form.Item>
        <Form.Item name="cash" rules={[{ required: true, message: 'Cash required' }]}>
          <InputNumber placeholder="Cash" prefix="$" />
        </Form.Item>
        <Form.Item name="burn" rules={[{ required: true, message: 'Burn required' }]}>
          <InputNumber placeholder="Burn" prefix="$" />
        </Form.Item>
        <Form.Item name="mrr" rules={[{ required: true, message: 'MRR required' }]}>
          <InputNumber placeholder="MRR" prefix="$" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Add Metric</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default MetricsForm;

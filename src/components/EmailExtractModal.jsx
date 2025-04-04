import React, { useState } from 'react';
import { Modal, Input } from 'antd';

const EmailExtractModal = ({ visible, onClose, onExtract }) => {
  const [emailText, setEmailText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleExtract = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/extract', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailText }),
      });
      const data = await res.json();
      onExtract(data);
      onClose();
    } catch (err) {
      console.error('Failed to extract:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="📩 Extract Metrics from Email"
      open={visible}
      onOk={handleExtract}
      onCancel={onClose}
      okText="Extract"
      confirmLoading={loading}
    >
      <Input.TextArea
        rows={6}
        value={emailText}
        onChange={(e) => setEmailText(e.target.value)}
        placeholder="Paste email with metrics..."
      />
    </Modal>
  );
};

export default EmailExtractModal;
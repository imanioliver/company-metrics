import React, { useState } from 'react';
import { Modal, Input } from 'antd';

const EmailExtractModal = ({ visible, onClose, onExtract }) => {
  const [emailText, setEmailText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleExtract = async () => {
    setLoading(true);
  
    // --- Real GPT call (commented for demo)
    /*
    try {
      const response = await fetch('/api/extract', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailText }),
      });
      const data = await response.json();
      onExtract(data);
      setLoading(false);
      onClose();
      return;
    } catch (err) {
      console.error('API error, falling back to mock:', err);
    }
    */
  
    // --- Mocked fallback
    setTimeout(() => {
      onExtract({
        date: '2025-03-31',
        cash: 40000,
        burn: 6000,
        mrr: 4500,
        status: 'AI: Needs Human Follow Up',
        draft: false,
        notes: 'AI extracted from email',
      });
      setLoading(false);
      onClose();
    }, 1500);
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
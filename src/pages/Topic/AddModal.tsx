import { createTopic } from '@/services/topic';
import { Form, Input, message, Modal } from 'antd';
import React, { useState } from 'react';

type AddModalProps = {
  onSuccess: () => void;
  onCancel: () => void;
};

const AddModal: React.FC<AddModalProps> = ({ onCancel, onSuccess }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    createTopic({
      ...values,
      mid: 6666,
    }).then(() => {
      message.success('创建成功!');
      onSuccess();
    });
  };

  return (
    <Modal
      title="添加话题"
      open
      onCancel={onCancel}
      destroyOnClose
      confirmLoading={loading}
      onOk={() => {
        form.submit();
      }}
    >
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item label="标题" name="title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="描述" name="description" rules={[{ required: true }]}>
          <Input.TextArea rows={3} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddModal;

import PopoverEmoji from '@/components/PopoverEmoji';
import { Form, Input, Modal } from 'antd';
import React, { useState } from 'react';

type AddModalProps = {
  onSuccess: () => void;
  onCancel: () => void;
};

const AddModal: React.FC<AddModalProps> = ({ onCancel, onSuccess }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [iconWord, setIconWord] = useState('💗');

  const onFinish = (values: any) => {};

  const IconBox = () => {
    return (
      <PopoverEmoji
        onSelect={(emojiInfo) => {
          if (emojiInfo?.native) {
            setIconWord(emojiInfo?.native);
          }
        }}
      >
        <span className="cursor-pointer block px-2 leading-7 -m-2 text-lg">{iconWord}</span>
      </PopoverEmoji>
    );
  };

  return (
    <Modal
      title="创建分类"
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
          <Input addonBefore={<IconBox />} />
        </Form.Item>
        <Form.Item label="描述" name="description" rules={[{ required: true }]}>
          <Input.TextArea rows={3} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddModal;

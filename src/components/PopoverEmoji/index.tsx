import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { Popover } from 'antd';
import React, { useState } from 'react';

type PopoverEmojiProps = {
  onSelect: (emojiInfo: any) => void;
  children: React.ReactNode;
};

const PopoverEmoji: React.FC<PopoverEmojiProps> = ({ onSelect, children }) => {
  const [open, setOpen] = useState(false);

  const Content = () => {
    return (
      <Picker
        data={data}
        onEmojiSelect={(emojiInfo: any) => {
          setOpen(false);
          onSelect(emojiInfo);
        }}
        theme="light"
        previewPosition="none"
      />
    );
  };

  return (
    <Popover
      content={Content}
      trigger="click"
      placement="topLeft"
      open={open}
      onOpenChange={setOpen}
    >
      {children}
    </Popover>
  );
};

export default PopoverEmoji;

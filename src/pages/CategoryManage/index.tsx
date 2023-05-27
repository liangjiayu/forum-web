import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space, Table } from 'antd';
import { useState } from 'react';
import AddModal from './AddModal';

const CategoryManage = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns = [
    {
      title: '图标',
      width: 50,
      render: () => {
        return (
          <div>
            <span
              className="w-10 h-10 flex items-center justify-center rounded-md m-auto text-base"
              style={{ backgroundColor: 'rgba(209, 213, 218, 0.5)' }}
            >
              🙏
            </span>
          </div>
        );
      },
    },
    {
      title: '主体',
      render: () => {
        return (
          <div>
            <div className="font-bold text-base">General</div>
            <div className="text-sm text-gray-500">Chat about anything and everything here</div>
          </div>
        );
      },
    },
    {
      title: '操作',
      width: 100,
      render: () => {
        return (
          <Space>
            <EditOutlined className="p-1 cursor-pointer hover:text-blue-500" />
            <DeleteOutlined className="p-1 cursor-pointer hover:text-blue-500" />
          </Space>
        );
      },
    },
  ];
  return (
    <div className="p-5 bg-white rounded-lg">
      <div className="flex mb-5">
        <div className="flex-1 font-bold text-xl">分类管理</div>
        <div>
          <Button
            type="primary"
            onClick={() => {
              setAddModalOpen(true);
            }}
          >
            新增分类
          </Button>
        </div>
      </div>
      <Table
        style={{
          borderTop: '1px solid #f0f0f0',
        }}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        showHeader={false}
      />

      {addModalOpen && (
        <AddModal
          onSuccess={() => {}}
          onCancel={() => {
            setAddModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default CategoryManage;

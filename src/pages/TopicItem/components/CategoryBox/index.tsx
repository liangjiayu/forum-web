import { EditOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';

const CategoryBox = () => {
  return (
    <div className="category-container">
      <div className="flex font-bold text-base items-center mb-3 ml-2 mr-2">
        <span className="flex-1">分类</span>
        <span
          className="hover:text-blue-500 p-1 cursor-pointer leading-none"
          onClick={() => {
            history.push('/topic/100/categoryManage');
          }}
        >
          <EditOutlined />
        </span>
      </div>
      <div className="category-list">
        <div className="item active">
          <div className="item-icon">🤔</div>
          <div className="item-name">name</div>
        </div>
        <div className="item">
          <div className="item-icon">💻</div>
          <div className="item-name">name</div>
        </div>
        <div className="item">
          <div className="item-icon">🔥</div>
          <div className="item-name">name</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBox;

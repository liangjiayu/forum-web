import { CommentOutlined, LikeOutlined } from '@ant-design/icons';
import { useParams } from '@umijs/max';
import { Button, Form, Input, Pagination, Select } from 'antd';
import './styles.less';

const TopicItem = () => {
  const params = useParams();

  return (
    <div>
      <div className="header-wrap">
        <Form layout="inline">
          <Form.Item style={{ flex: 1 }}>
            <Input.Search placeholder="搜索内容" />
          </Form.Item>
          <Form.Item label={'排序'}>
            <Select
              style={{ width: 120 }}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
          </Form.Item>
          <Form.Item label="标签">
            <Select
              mode="multiple"
              maxTagCount="responsive"
              style={{ width: 180 }}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
          </Form.Item>
          <Form.Item label="过滤">
            <Select
              style={{ width: 120 }}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
          </Form.Item>

          <Button type="primary">添加帖子</Button>
        </Form>
      </div>
      <div className="main-wrap">
        <div className="main-left">
          <div className="category-container">
            <div className="category-name">分类</div>
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
        </div>
        <div className="main-right">
          <div className="post-title">热门帖子</div>
          <div className="post-list">
            <div className="item">
              <div className="item-info">
                <div className="item-title">titletitletitle</div>
                <div className="item-desc">descdescdescdesc</div>
                <div className="item-meta">
                  <div className="meta-user">LiangJiaYu</div>
                  <div className="meta-time">20天前</div>
                </div>
              </div>
              <div className="item-right">
                <div className="item-btn">
                  <LikeOutlined />
                  <span>10</span>
                </div>
                <div className="item-btn">
                  <CommentOutlined />
                  <span>12</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-info">
                <div className="item-title">titletitletitle</div>
                <div className="item-desc">descdescdescdesc</div>
                <div className="item-meta">
                  <div className="meta-user">LiangJiaYu</div>
                  <div className="meta-time">20天前</div>
                </div>
              </div>
              <div className="item-right">
                <div className="item-btn">
                  <LikeOutlined />
                  <span>10</span>
                </div>
                <div className="item-btn">
                  <CommentOutlined />
                  <span>12</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-info">
                <div className="item-title">titletitletitle</div>
                <div className="item-desc">descdescdescdesc</div>
                <div className="item-meta">
                  <div className="meta-user">LiangJiaYu</div>
                  <div className="meta-time">20天前</div>
                </div>
              </div>
              <div className="item-right">
                <div className="item-btn">
                  <LikeOutlined />
                  <span>10</span>
                </div>
                <div className="item-btn">
                  <CommentOutlined />
                  <span>12</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 30, textAlign: 'right' }}>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicItem;

import { Button, Form, Input, Select } from 'antd';
import styles from './styles.less';
import VditorDemo from './VditorDemo';

const PostEdit = () => {
  return (
    <div className={styles['postedit-root']}>
      <Form layout="vertical">
        <Form.Item label="标题">
          <Input className="lg" />
        </Form.Item>
        <Form.Item label="分类">
          <Select className="lg" />
        </Form.Item>
        <div>
          <VditorDemo />
        </div>

        <div style={{ marginTop: 20 }}>
          <Button type="primary">保存</Button>
        </div>
      </Form>
    </div>
  );
};

export default PostEdit;

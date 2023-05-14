import { getTopicList } from '@/services/topic';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import AddModal from './AddModal';
import styles from './styles.less';

const Topic = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  const fetchTopicList = () => {
    getTopicList({ pageSize: 200 }).then((res) => {
      console.log(res);
      if (res.data) {
        setDataSource(res.data.records);
      }
    });
  };

  useEffect(() => {
    fetchTopicList();
  }, []);

  return (
    <div>
      <div style={{ marginBottom: 20, textAlign: 'right' }}>
        <Button
          type="primary"
          onClick={() => {
            setAddModalOpen(true);
          }}
        >
          添加话题
        </Button>
      </div>
      <div className={styles.list}>
        {dataSource.map((i: any) => {
          return (
            <div className={styles.item} key={i.id}>
              <div className={styles['item-title']}>{i.title}</div>
              <div className={styles['item-desc']}>{i.description}</div>
            </div>
          );
        })}

        {/* <div className={styles.item}>
          <div className={styles['item-title']}>title</div>
          <div className={styles['item-desc']}>desc</div>
        </div>
        <div className={styles.item}>
          <div className={styles['item-title']}>title</div>
          <div className={styles['item-desc']}>desc</div>
        </div>
        <div className={styles.item}>
          <div className={styles['item-title']}>title</div>
          <div className={styles['item-desc']}>desc</div>
        </div> */}
      </div>

      {/* 添加话题 */}
      {addModalOpen && (
        <AddModal
          onSuccess={() => {
            setAddModalOpen(false);
            fetchTopicList();
          }}
          onCancel={() => {
            setAddModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Topic;

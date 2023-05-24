import { CommentOutlined, SmileOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import './styles.less';

const PostPage = () => {
  const IconsMenu = (
    <ul className="actions-icons-menu">
      <li className="item">👍</li>
      <li className="item">👎</li>
      <li className="item">😄</li>
      <li className="item">🎉</li>
      <li className="item">😕</li>
      <li className="item">❤️</li>
      <li className="item">🚀</li>
      <li className="item">👀</li>
    </ul>
  );

  return (
    <div className="post-root">
      <div className="post-root-left">
        <div className="post-title">Welcome to ant-design Discussions!</div>
        <div className="comment-box">
          <div className="comment-userinfo">
            <img
              className="user-avatar"
              src="https://avatars.githubusercontent.com/u/21997489"
              alt=""
            />
            <span className="user-name">chenshuai2144</span>
            <span className="user-time">on Dec 9, 2020</span>
          </div>
          <div className="comment-content">
            We’re using Discussions as a place to connect with other members of our community. We
            hope that you: Ask questions you’re wondering about. Share ideas. Engage with other
            community members. Welcome others and are open-minded. Remember that this is a community
            we build together 💪. To get started, comment below with an introduction of yourself and
            tell us about what you do with this community.
          </div>
          <div className="comment-action">
            <Popover
              content={IconsMenu}
              trigger="click"
              overlayInnerStyle={{ padding: '2px 4px' }}
              placement="topLeft"
              arrow={false}
            >
              <div className="action-btn">
                <SmileOutlined />
              </div>
            </Popover>

            <div className="action-icons">
              <div className="icons-item">
                👍
                <span className="icons-num">5</span>
              </div>
              <div className="icons-item">
                👎
                <span className="icons-num">5</span>
              </div>
            </div>
          </div>
        </div>

        <div className="comment-box">
          <div className="comment-userinfo">
            <img
              className="user-avatar"
              src="https://avatars.githubusercontent.com/u/21997489"
              alt=""
            />
            <span className="user-name">chenshuai2144</span>
            <span className="user-time">on Dec 9, 2020</span>
          </div>
          <div className="comment-content">
            We’re using Discussions as a place to connect with other members of our community. We
            hope that you: Ask questions you’re wondering about. Share ideas. Engage with other
            community members. Welcome others and are open-minded. Remember that this is a community
            we build together 💪. To get started, comment below with an introduction of yourself and
            tell us about what you do with this community.
          </div>
          <div className="comment-action">
            <Popover
              content={IconsMenu}
              trigger="click"
              overlayInnerStyle={{ padding: '2px 4px' }}
              placement="topLeft"
              arrow={false}
            >
              <div className="action-btn">
                <SmileOutlined />
              </div>
            </Popover>
            <div className="action-icons">
              <div className="icons-item">
                👍
                <span className="icons-num">5</span>
              </div>
              <div className="icons-item">
                👎
                <span className="icons-num">5</span>
              </div>
            </div>
          </div>

          <div className="reply-wrap">
            <div className="reply-item">
              <div className="reply-item-left">
                <img src="https://avatars.githubusercontent.com/u/21997489" alt="" />
              </div>
              <div className="reply-item-right">
                <div className="reply-userinfo">
                  <span className="name">arvin</span>
                  <span className="time">on Feb 2</span>
                </div>
                <div className="reply-content">
                  应用代码里估计还不行。因为现在的底层是用的 emotion，好像 emotion 本身没有
                  treeShaking 的能力？（我不确定）
                </div>
                <div className="comment-action" style={{ margin: 0 }}>
                  <Popover
                    content={IconsMenu}
                    trigger="click"
                    overlayInnerStyle={{ padding: '2px 4px' }}
                    placement="topLeft"
                    arrow={false}
                  >
                    <div className="action-btn">
                      <SmileOutlined />
                    </div>
                  </Popover>
                  <div className="action-icons">
                    <div className="icons-item">
                      👍
                      <span className="icons-num">5</span>
                    </div>
                    <div className="icons-item">
                      👎
                      <span className="icons-num">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reply-item">
              <div className="reply-item-left">
                <img src="https://avatars.githubusercontent.com/u/21997489" alt="" />
              </div>
              <div className="reply-item-right">
                <div className="reply-userinfo">
                  <span className="name">arvin</span>
                  <span className="time">on Feb 2</span>
                </div>
                <div className="reply-content">
                  应用代码里估计还不行。因为现在的底层是用的 emotion，好像 emotion 本身没有
                  treeShaking 的能力？（我不确定）
                </div>
                <div className="comment-action" style={{ margin: 0 }}>
                  <div className="action-btn">
                    <CommentOutlined />
                  </div>
                  <Popover
                    content={IconsMenu}
                    trigger="click"
                    overlayInnerStyle={{ padding: '2px 4px' }}
                    placement="topLeft"
                    arrow={false}
                  >
                    <div className="action-btn">
                      <SmileOutlined />
                    </div>
                  </Popover>
                  <div className="action-icons">
                    <div className="icons-item">
                      👍
                      <span className="icons-num">5</span>
                    </div>
                    <div className="icons-item">
                      👎
                      <span className="icons-num">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="post-root-right">1</div>
    </div>
  );
};

export default PostPage;

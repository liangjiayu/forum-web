import { Outlet } from '@umijs/max';
import './styles.less';

export default function Layout() {
  return (
    <div className="layout-root">
      <header className="layout-header-wrap">
        <div className="header-container">
          <div className="header-logo">
            <img src="/logo-word.png" alt="" />
          </div>
          <div className="header-nav">
            <div className="item">首页</div>
            <div className="item">话题</div>
          </div>
          <div style={{ flex: 1 }} />
          <div className="header-avatar">
            <img src="https://avatars.githubusercontent.com/u/21997489" alt="" />
          </div>
        </div>
      </header>
      <main className="layout-main-container">
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}

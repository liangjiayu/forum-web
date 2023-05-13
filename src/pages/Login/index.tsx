import { loginApi } from '@/services/member';
import { Button, Form, Input } from 'antd';
import './styles.less';

const Login = () => {
  const onFinish = (values: any) => {
    loginApi(values).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="login-root">
      <div className="login-form-box">
        <div className="login-title">
          <img src="/logo.png" alt="" />
        </div>
        <Form layout="vertical" size="large" onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: '请输入账号' }]}>
            <Input placeholder="请输入账号" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
          <Button block type="primary" htmlType="submit">
            登录
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;

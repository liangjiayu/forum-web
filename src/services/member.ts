import { request } from '@umijs/max';

export const loginApi = (data: any) => {
  return request('/api/member/login', {
    method: 'POST',
    data,
  });
};

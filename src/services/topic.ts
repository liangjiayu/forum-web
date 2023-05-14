import { request } from '@umijs/max';

export const createTopic = (data: any) => {
  return request('/api/topic/create', {
    method: 'POST',
    data,
  });
};

export const getTopicList = (params: any) => {
  return request('/api/topic/list', {
    method: 'GET',
    params,
  });
};

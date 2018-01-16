import request from '../../../../core/utils/request';
import {stringify} from "qs";
// 加载组织列表
export async function listOrg(params) {
  return request(`/orginization/listOrg?${stringify(params)}`);
}
export async function changeStatus(params) {
  return request('/orginization/changeStatus', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}
// 根据ID删除组织
export async function deleteOrg(params) {
  return request('/orginization/deleteOrg', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

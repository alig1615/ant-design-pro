import modelExtend from 'dva-model-extend';
import { model } from 'core/common/BaseModel';
import { list, listModulebyRoleId, getDictItemByRoleId, listUserByRoleId } from '../service/RoleService';
// 角色授权管理model
export default modelExtend(model, {
  namespace: 'role',
  state: {
    currentItem: {},
    operateType: '',
    moduleData: {
      data: [],
      checked: [],
    },
    userData: {
      data: [],
      checked: [],
    },
    configData: [],
  },
  effects: {
    // 加载权限列表
    *listRole({ payload }, { call, put }) {
      const response = yield call(list, payload);
      yield put({
        type: 'saveData',
        payload: response,
      });
    },
    // 加载模块授权列表
    *listModule({ payload }, { call, put }) {
      const response = yield call(listModulebyRoleId, payload);
      yield put({
        type: 'updateState',
        payload: {
          currentItem: payload.currentItem,
          moduleData: {...response},
          operateType: payload.operateType,
        },
      });
    },
    // 获取所有授权参数
    *listConfig({ payload }, { call, put }) {
      const response = yield call(getDictItemByRoleId, payload);
      yield put({
        type: 'updateState',
        payload: {
          currentItem: payload.currentItem,
          configData: response,
          operateType: payload.operateType,
        },
      });
    },
    // 获取所有用户
    *listUser({ payload }, { call, put }) {
      const response = yield call(listUserByRoleId, payload);
      yield put({
        type: 'updateState',
        payload: {
          currentItem: payload.currentItem,
          userData: {...response},
          operateType: payload.operateType,
        },
      });
    }
  }
});

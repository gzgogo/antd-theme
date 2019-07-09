import { extendObservable, action } from 'mobx';
import { message } from 'antd';
import { getSubTypes, createPlan, editPlan, getPlanDetail } from 'util/api';

export default class BasicFormStore {
  constructor() {
    this.reset(true);
  }

  @action
  onWillMount = async (location, match, history) => {
    this.reset();

    this.setRoute(location, match, history);

    this.loading = true;

    const { id } = match.params || {};
    if (id) {
      await this.restore(id);
    }

    if (this.fields.type.value) {
      await this.getSubTypes(this.fields.type.value);
    }

    this.loading = false;
  }

  @action
  reset = (init) => {
    const state = {
      fields: {
        name: { value: '' }, // 名称
        description: { value: '' }, // 描述
        type: { value: undefined }, // 类型
        subType: { value: undefined }, // 子类型
        logo: { value: null }, // logo
        image: { value: null } // 图片
      },

      types: [{
        name: '类型1',
        id: 0
      }, {
        name: '类型2',
        id: 1
      }],
      subTypes: [],

      loading: false, // 是否显示加载状态
      subTypeLoading: false,
      submiting: false
    };

    if (init) {
      extendObservable(this, state);
    } else {
      Object.keys(state).forEach(key => (this[key] = state[key]));
    }

    this.formValues = null;

    this.location = {};
    this.match = {};
    this.history = {};
  }

  setRoute = (location, match, history) => {
    this.location = location;
    this.match = match;
    this.history = history;
  }

  @action
  restore = async (id) => {
    const res = await getPlanDetail(id);
    if (res.code === 0 && res.data) {
      const { name, description, type, subType, logoUrl, imageUrl } = res.data;
      this.fields.name.value = name;
      this.fields.type.value = type.id;
      this.fields.subType.value = subType.id;
      this.fields.description.value = description;
      this.fields.logo.value = {
        url: logoUrl,
        thumbnailUrl: logoUrl
      };
      this.fields.image.value = {
        url: imageUrl,
        thumbnailUrl: imageUrl
      };
    }
  }

  @action
  getSubTypes = async (type) => {
    this.subTypeLoading = true;

    const res = await getSubTypes({
      type
    });

    if (res.code === 0 && res.data && Array.isArray(res.data)) {
      this.subTypes = res.data;
      this.fields.subType.value = res.data[0].id;
    }

    this.subTypeLoading = false;
  }

  @action
  // 表单 onChange
  onFormChange = async (changedFields) => {
    if (changedFields.type) {
      await this.getSubTypes(changedFields.type.value);
    }

    this.fields = {
      ...this.fields,
      ...changedFields
    };
  }

  @action
  submit = async (values) => {
    const { id } = this.match.params || {};

    const typeMap = {};
    const subTypeMap = {};
    this.subTypes.forEach(item => (subTypeMap[item.id] = item));
    this.types.forEach(item => (typeMap[item.id] = item));

    const params = {
      ...values,
      type: typeMap[values.type],
      subType: subTypeMap[values.subType],
      id
    };

    this.loading = true;
    const fn = id ? editPlan : createPlan;
    const res = await fn(params);
    this.loading = false;
    if (res.code === 0) {
      message.success((this.match.params || {}).id ? '修改成功' : '创建成功');
    }
  }
}

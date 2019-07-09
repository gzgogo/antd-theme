// import { extendObservable, action } from 'mobx';

export default class loginStore {
  // constructor() {
  //   this.reset(true);
  // }

  // @action
  // reset = (init) => {
  //   const state = {
  //     fields: {
  //       name: { value: '' }, // 留存名称
  //       type: { value: 0 } // 推广类型
  //     },

  //     loading: false, // 是否显示加载状态
  //     submiting: false
  //   };

  //   if (init) {
  //     extendObservable(this, state);
  //   } else {
  //     Object.keys(state).forEach(key => (this[key] = state[key]));
  //   }

  //   this.location = {};
  //   this.match = {};
  //   this.history = {};
  // }

  // setRoute = (location, match, history) => {
  //   this.location = location;
  //   this.match = match;
  //   this.history = history;
  // }

  // @action
  // create = () => {
  //   this.history.push('/project/exchangemgr/create');
  // }
}

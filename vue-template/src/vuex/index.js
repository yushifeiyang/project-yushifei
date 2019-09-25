import Vue from 'vue';
import Vuex from 'vuex';
// 方便多人开发，每人都可以有自己state模块的js文件
import Test from './test.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    test: Test
  },
  getters: {
    // 获取选中项
    getAuthor (state) {
      return state.test.author;
    }
  },
  mutations: {
    setAuthor (state, msg) {
        state.test.author = msg;
    }
  }
});

export default store;

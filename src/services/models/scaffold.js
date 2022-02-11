import { createModel } from '@rematch/core';
import { Modal } from 'antd';
import API from '@/api';

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  },
};

export const scaffold = createModel()({
  state: {
    // 排序方式
    sort: null,
    products: [],
    // 筛选条件(匹配尺码)
    filters: [],
    isLoading: false,
  },
  reducers: {
    updateProducts: (state, payload) => {
      return {
        ...state,
        products: payload,
      };
    },
    // 更新排序
    updateSort: (state, payload) => {
      return {
        ...state,
        sort: payload,
      };
    },
    // 更新筛选条件
    updateFilters: (state, payload) => {
      return {
        ...state,
        filters: payload,
      };
    },
    updateLoadingState: (state, payload) => {
      return {
        ...state,
        isLoading: payload,
      };
    },
  },
  effects: (dispatch) => {
    return {
      fetchProducts: async function (_, state) {
        dispatch({ type: 'scaffold/updateLoadingState', payload: true });
        try {
          const { data } = await API.getProducts();
          let products = data.products;
          // 过滤与排序
          const { filters, sort } = state.scaffold;
          if (!!filters && filters.length > 0) {
            products = products.filter((p) =>
              filters.find((f) => p.availableSizes.find((size) => size === f))
            );
          }
          if (!!sort) {
            products = products.sort(compare[sort]);
          }

          dispatch({ type: 'scaffold/updateProducts', payload: products });
          dispatch({ type: 'scaffold/updateLoadingState', payload: false });
        } catch (e) {
          dispatch({ type: 'scaffold/updateLoadingState', payload: false });
          console.error(e);
          // 如果请求错误 进行提示是否继续获取
          Modal.confirm({
            title: '错误',
            content: '数据获取异常！是否重试？',
            okText: '重试',
            cancelText: '取消',
            onOk: () => {
              this.fetchProducts();
            },
          });
          // if (window.confirm('数据获取异常！是否重试？')) {
          //   this.fetchProducts();
          // }
        }
      },
    };
  },
});

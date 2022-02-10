import { createModel } from '@rematch/core';
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
    sort: undefined,
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
      fetchProducts: async (_, state) => {
        dispatch({ type: 'scaffold/updateLoadingState', payload: true });
        try {
          const { data } = await API.getProducts();
          let products = data.products;
          // TODO: 过滤与排序
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
        } catch (e) {
          console.error(e);
          console.log('Could not fetch products. Try again later.');
        } finally {
          dispatch({ type: 'scaffold/updateLoadingState', payload: false });
        }
      },
    };
  },
});

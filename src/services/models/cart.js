import { createModel } from '@rematch/core';

// const lockBody = () => {
//   if (!document.body.classList.contains('overflow-hidden')) {
//     document.body.classList.add('overflow-hidden');
//   }
// };

// const unlockBody = () => {
//   if (document.body.classList.contains('overflow-hidden')) {
//     document.body.classList.remove('overflow-hidden');
//   }
// };

const updatePriceAndTotal = (products = []) => {
  return products.reduce(
    (t, c) => {
      t.total = c.qty + t.total;
      t.price = c.price * c.qty + t.price;
      return t;
    },
    { total: 0, price: 0, products }
  );
};

export const cart = createModel()({
  state: {
    // TODO: 思考是否需要放在model中
    isOpen: false,
    products: [],
    total: 0,
    price: 0,
  },
  reducers: {
    updateOpenState: (state, payload) => {
      // if (payload) {
      //   lockBody();
      // } else {
      //   unlockBody();
      // }
      return {
        ...state,
        isOpen: payload,
      };
    },
    add: (state, payload) => {
      const { products } = state;

      let alreadyInCart = false;
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === payload.id) {
          alreadyInCart = true;
          products[i].qty += 1;
          break;
        }
      }
      // 如果不存在购物车内 则进行添加操作
      if (!alreadyInCart) {
        // 初始化商品数量
        products.push({ ...payload, qty: 1 });
      }

      return {
        ...state,
        isOpen: true,
        ...updatePriceAndTotal(products),
      };
    },
    remove: (state, payload) => {
      const { products } = state;
      const index = products.findIndex((p) => p.id === payload.id);
      if (index >= 0) {
        products.splice(index, 1);
      }
      return {
        ...state,
        ...updatePriceAndTotal(products),
      };
    },
    update: (state, payload) => {
      const { products } = state;
      const index = products.findIndex((p) => p.id === payload.id);
      if (index >= 0) {
        if (payload.qty <= 0) {
          products.splice(index, 1);
        } else {
          products[index].qty = payload.qty;
        }
      }
      return {
        ...state,
        ...updatePriceAndTotal(products),
      };
    },
    clear: (state) => {
      return {
        ...state,
        ...updatePriceAndTotal([]),
      };
    },
  },
});

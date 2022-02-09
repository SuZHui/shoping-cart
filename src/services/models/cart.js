import { createModel } from '@rematch/core'

export const cart = createModel()({
  state: {
    products: []
  },
  reducers: {
    add: (state, payload) => {
      // TODO: 添加
      return state
    },
    remove: (state, payload) => {
      // TODO: 移除
      return state
    }
  }
})

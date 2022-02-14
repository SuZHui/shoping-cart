import Scaffold from '..';
import store from '@/services/store';
import { Provider } from 'react-redux';
import { render, screen, cleanup } from '@testing-library/react';

const mockList = [
  {
    id: 1,
    sku: 51498472915966366,
    title: 'Dark Thug Blue-Navy T-Shirt',
    description: '',
    availableSizes: ['M'],
    style: 'Front print and paisley print',
    price: 29.45,
    installments: 5,
    currencyId: 'USD',
    currencyFormat: '$',
    isFreeShipping: true,
  },
  {
    id: 2,
    sku: 12064273040195392,
    title: 'Cat Tee Black T-Shirt',
    description: '4 MSL',
    availableSizes: ['S', 'XS'],
    style: 'Black with custom print',
    price: 10.9,
    installments: 9,
    currencyId: 'USD',
    currencyFormat: '$',
    isFreeShipping: true,
  },
];

// beforeEach(() => {
//   render(
//     <Provider store={store}>
//       <Scaffold />
//     </Provider>
//   );
//   store.dispatch.scaffold.updateProducts(mockList);
// });

// afterEach(() => {
//   cleanup();
// });

test('`Scaffold`显示两件商品', () => {
  const { unmount } = render(
    <Provider store={store}>
      <Scaffold />
    </Provider>
  );
  store.dispatch.scaffold.updateProducts(mockList);
  expect(screen.getAllByRole('button').length).toEqual(2);
  unmount();
});

test('`Scaffold`商品数据显示正确', () => {
  const { unmount } = render(
    <Provider store={store}>
      <Scaffold />
    </Provider>
  );
  const roles = screen.getAllByRole('img');
  expect(roles[0]).not.toBeUndefined();
  expect(roles[1]).not.toBeUndefined();
  expect(roles[0].alt).toEqual('Dark Thug Blue-Navy T-Shirt');
  expect(roles[1].alt).toEqual('Cat Tee Black T-Shirt');
  unmount();
});

import { render } from '@testing-library/react';
import Product from '..';

const mockProduct = {
  id: 12,
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
};

test('`Product` 正常渲染', () => {
  const { unmount } = render(<Product data={mockProduct} />);
  unmount();
});

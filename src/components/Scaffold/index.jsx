import { useEffect } from 'react';
import Spin from '@/components/Spin';
// import ScaffoldHeader from '@/components/Scaffold/Header';
import Product from '@/components/Product';
import { fetchProducts, addProduct } from '@/services/actions';
import { useSelector } from 'react-redux';
import './style.scss';

export default function Scaffold() {
  const { products, filters, sort, isLoading } = useSelector(
    (state) => state.scaffold
  );

  useEffect(() => {
    fetchProducts();
  }, [filters, sort]);

  return (
    <>
      {isLoading && <Spin fullscreen />}
      <div className="scaffold">
        {/* <ScaffoldHeader /> */}
        {/* 产品列表 */}
        {products.map((p) => (
          <Product key={p.id} data={p} onAdd={addProduct} />
        ))}
      </div>
    </>
  );
}

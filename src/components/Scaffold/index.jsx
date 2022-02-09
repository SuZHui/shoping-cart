import { useEffect } from 'react'
import Spin from '@/components/Spin'
import ScaffoldHeader from '@/components/Scaffold/Header'
import Product from '@/components/Product'
import { fetchProducts } from '@/services/actions'
import { useSelector } from 'react-redux'
import './style.scss'


export default function Scaffold () {
  const state = useSelector(state => state.scaffold)
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      {
        false && <Spin fullscreen />
      }
      <div className="scaffold">
        <ScaffoldHeader />
        {/* 产品列表 */}
        {
          state.products.map(p => (
            <Product key={p.id} data={p} />
          ))
        }
      </div>
    </>
  )
}

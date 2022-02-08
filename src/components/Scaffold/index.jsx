import React from 'react'
import Spin from '@/components/Spin'
import ScaffoldHeader from '@/components/Scaffold/Header'
import Product from '@/components/Product'
import './style.scss'


export default function Scaffold () {
  return (
    <>
      {
        false && <Spin fullscreen />
      }
      <div className="scaffold">
        <ScaffoldHeader />
        {/* 产品列表 */}
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  )
}

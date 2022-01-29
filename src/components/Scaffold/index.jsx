import React from 'react'
import Spin from '@/components/Spin'
import ScaffoldHeader from '@/components/Scaffold/Header'


export default function Scaffold () {
  return (
    <div className="scaffold">
      <Spin fullscreen />
      <ScaffoldHeader />
      产品列表
    </div>
  )
}

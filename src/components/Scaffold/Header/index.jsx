import React from 'react'
import { NativeSelect, FormControl } from '@mui/material'
import './style.scss'

const sortBy = [
  { value: undefined, label: '未排序' },
  { value: 'lowestprice', label: '价格升序' },
  { value: 'highestprice', label: '价格降序' }
]

export default function Header () {
  const [sort, setSort] = React.useState(undefined)

  const handleChange = (event) => {
    setSort(event.target.value);
  }
  
  return (
    <div className="scaffold-header">
      <div>
        <small>共5件商品</small>
      </div>
      <div>
        <FormControl sx={{ minWidth: 140 }}>
          {/* <InputLabel id="demo-simple-select-label">排序</InputLabel> */}
          <NativeSelect
            id="demo-simple-select"
            value={sort}
            label="Age"
            onChange={handleChange}
          >
            {
              sortBy.map((o, i) => (
                <option
                  value={o.value}
                  key={i}
                >{ o.label }</option>
              ))
            }
          </NativeSelect>
        </FormControl>
      </div>
    </div>
  )
}

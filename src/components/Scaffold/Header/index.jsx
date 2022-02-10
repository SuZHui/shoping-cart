import React from 'react';
import { NativeSelect, FormControl } from '@mui/material';
import { useSelector } from 'react-redux';
import { updateSort } from '@/services/actions';
import './style.scss';

const sortBy = [
  { value: undefined, label: '未排序' },
  { value: 'lowestprice', label: '价格升序' },
  { value: 'highestprice', label: '价格降序' },
];

export default function Header() {
  const state = useSelector((state) => state.scaffold);

  const handleChange = (event) => {
    updateSort(event.target.value);
  };

  return (
    <div className="scaffold-header">
      <div>
        <small>共{state.products.length}件商品</small>
      </div>
      <div>
        <FormControl sx={{ minWidth: 140 }}>
          {/* <InputLabel id="demo-simple-select-label">排序</InputLabel> */}
          <NativeSelect
            id="demo-simple-select"
            value={state.sort}
            label="Age"
            onChange={handleChange}
          >
            {sortBy.map((o, i) => (
              <option value={o.value} key={i}>
                {o.label}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </div>
    </div>
  );
}

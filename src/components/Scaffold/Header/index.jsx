import React from 'react';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { updateSort } from '@/services/actions';
import styles from './style.module.scss';

const { Option } = Select;

const sortBy = [
  { value: null, label: '未排序' },
  { value: 'lowestprice', label: '价格升序' },
  { value: 'highestprice', label: '价格降序' },
];

export default function Header() {
  const state = useSelector((state) => state.scaffold);

  const handleChange = (event) => {
    console.log(event);
    updateSort(event);
  };

  return (
    <div className={styles['scaffold-header']}>
      <div>
        <small>共{state.products.length}件商品</small>
      </div>
      <div>
        <Select
          style={{ width: 140 }}
          onChange={handleChange}
          defaultValue={null}
        >
          {sortBy.map((o, i) => (
            <Option value={o.value} key={i}>
              {o.label}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
}

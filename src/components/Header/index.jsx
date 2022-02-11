import { Affix } from 'antd';
import Filter from '@/components/Filter';
import ScaffodHeader from '@/components/Scaffold/Header';

import './style.scss';

export default function Header() {
  return (
    <header className="header">
      <div>
        <div>
          <h1>SHOPFLY</h1>
        </div>
      </div>
      <Affix>
        <div className="header-affix">
          <Filter />
          <ScaffodHeader />
        </div>
      </Affix>
    </header>
  );
}

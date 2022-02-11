import { Affix } from 'antd';
import Filter from '@/components/Filter';
import ScaffodHeader from '@/components/Scaffold/Header';
import styles from './style.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <div>
          <h1>SHOPFLY</h1>
        </div>
      </div>
      <Affix>
        <div className={styles['header-affix']}>
          <Filter />
          <ScaffodHeader />
        </div>
      </Affix>
    </header>
  );
}

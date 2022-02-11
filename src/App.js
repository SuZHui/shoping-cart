import Scaffold from '@/components/Scaffold';
import Cart from '@/components/Cart';
import Header from '@/components/Header';
import { BackTop } from 'antd';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Filter /> */}
        <Scaffold />
      </main>
      <Cart />
      <BackTop />
    </>
  );
}

export default App;

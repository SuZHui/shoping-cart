import Scaffold from '@/components/Scaffold';
import Cart from '@/components/Cart';
import Filter from '@/components/Filter';
import './App.css';

function App() {
  return (
    <>
      <main>
        <Filter />
        <Scaffold />
      </main>
      <Cart />
    </>
  );
}

export default App;

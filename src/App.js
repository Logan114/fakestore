import logo from './logo.svg';
import './App.css';
import Vasarloter from './components/Vasarloter';
import { useContext } from 'react';
import { ApiContext } from './contexts/ApiContext';
import { KosarProvider } from './contexts/Kosarba';

function App() {
  const termekLista=useContext(ApiContext)
  return (
    <div className="App">
      <header className="App-header">
        <h1>FakeStore webáruház 🦀</h1>
      </header>
      <main>
        <aside className='col-lg-4'>Kosár</aside>
        <article className='col-lg-8'>
          <h4>Vásárlótér</h4>
          <Vasarloter termekLista={termekLista} />
        </article>
      </main>
    </div>
  );
}

export default App;

// App.js
import React from "react";
import "./App.css";
import Vasarloter from "./components/Vasarloter";
import { ApiProvider } from "./contexts/ApiContext";
import { KosarProvider } from "./contexts/Kosarba";

function App() {
  return (
    <ApiProvider>
      <KosarProvider>
        <div className="App">
          <header className="App-header">
            <h1>FakeStore webáruház 🦀</h1>
          </header>
          <main>
            <aside className="col-lg-4">Kosár</aside>
            <article className="col-lg-8">
              <h4>Vásárlótér</h4>
              <Vasarloter />
            </article>
          </main>
        </div>
      </KosarProvider>
    </ApiProvider>
  );
}

export default App;

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Helvetic.dev</h1>
        <nav>
          <ul>
            <li>Nav item 1</li>
            <li>Nav item 2</li>
          </ul>
        </nav>
      </header>
      <main className="clearFix">
        <section>
          Section 1
        </section>
        <section>
          Section 2
        </section>
      </main>
      <footer>
        <p>
            &copy; 2019 F.M. Albertin
        </p>
      </footer>
    </div>
  );
}

export default App;
